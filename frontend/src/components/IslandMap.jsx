import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mapLocations } from '../data/mapLocations';
import LocationModal from './LocationModal';
import MapControls from './MapControls';
import ExploreMenu from './ExploreMenu';
import { Sparkles, Ship, Radio, Landmark, Anchor, FlaskConical, GraduationCap, Castle } from 'lucide-react';

const MAP_IMAGE_URL = "/map-artwork.png";

const locationIcons = {
  palace: Castle,
  academy: GraduationCap,
  research: FlaskConical,
  harbor: Anchor,
  museum: Landmark,
  satellite: Radio,
};

export default function IslandMap() {
  const [zoom, setZoom] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [characterState, setCharacterState] = useState("idle");
  const [speechText, setSpeechText] = useState("Tap any location! ♡");
  const canvasRef = useRef(null);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.3, 2.2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.3, 0.7));
  const handleReset = () => setZoom(1);

  // Dynamic Ocean Sparkles & Birds Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedX: Math.random() * 0.4 - 0.2,
      speedY: Math.random() * 0.2 + 0.1,
      opacity: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * 0.02 + 0.005,
    }));

    const birds = Array.from({ length: 4 }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.4),
      speed: Math.random() * 0.6 + 0.3,
      wingPhase: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += Math.sin(Date.now() * p.pulse) * 0.01;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(245, 222, 179, ${Math.max(0.1, Math.min(0.8, p.opacity))})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.strokeStyle = "rgba(44, 29, 14, 0.6)";
      ctx.lineWidth = 1.2;
      birds.forEach((b) => {
        b.x += b.speed;
        b.wingPhase += 0.08;
        if (b.x > width + 20) b.x = -20;

        const wingY = Math.sin(b.wingPhase) * 3;
        ctx.beginPath();
        ctx.moveTo(b.x - 5, b.y + wingY);
        ctx.quadraticCurveTo(b.x, b.y - 2, b.x + 5, b.y + wingY);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleCharacterClick = () => {
    const quotes = [
      "Tap any destination on the map! ✨",
      "Looking for my projects? Tap Project Harbor! ⛵",
      "Check out the Research Lab & Academy! 🎓",
      "Welcome to Shruti's World! 🗺️"
    ];
    const nextQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setSpeechText(nextQuote);
    setCharacterState("talking");
    setTimeout(() => setCharacterState("idle"), 4000);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#dcc4a4] select-none touch-none">
      {/* Top Right Quick Navigation Menu */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30">
        <ExploreMenu onSelectLocation={(loc) => setSelectedLocation(loc)} />
      </div>

      {/* Touch & Drag Canvas */}
      <motion.div
        drag
        dragConstraints={{ left: -800, right: 800, top: -600, bottom: 600 }}
        dragElastic={0.05}
        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        <motion.div
          animate={{ scale: zoom }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="relative w-full h-full max-w-[1920px] max-h-[1080px] flex items-center justify-center"
        >
          <div className="relative w-auto h-full max-h-[100vh] aspect-[16/9] flex items-center justify-center">
            {/* Map Artwork */}
            <img
              src={MAP_IMAGE_URL}
              alt="Shruti's Island Interactive Map"
              className="w-full h-full object-contain drop-shadow-2xl select-none"
              draggable={false}
            />

            {/* Canvas overlay for sea sparkles & birds */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 pointer-events-none z-10 w-full h-full"
            />

            {/* Floating Ship */}
            <motion.div
              animate={{
                x: [-10, 10, -10],
                y: [-4, 4, -4],
                rotate: [-2, 2, -2]
              }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-[58%] left-[17%] z-15 pointer-events-none opacity-90 text-[#36220f]"
            >
              <Ship className="w-5 h-5 sm:w-8 sm:h-8 drop-shadow-md" />
            </motion.div>

            {/* Mobile Responsive Pins */}
            {mapLocations.map((loc) => {
              const IconComp = locationIcons[loc.id] || Sparkles;
              return (
                <div
                  key={loc.id}
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                  onClick={() => setSelectedLocation(loc)}
                >
                  <motion.div
                    animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="absolute -inset-1.5 rounded-full bg-amber-400/50 blur-sm group-hover:bg-amber-300/80"
                  />

                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                    className="relative bg-[#f5efeb] border-1.5 sm:border-2 border-[#2c1d0e] px-2 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl shadow-lg flex items-center gap-1.5 sm:gap-2 group-hover:border-amber-700 group-hover:bg-[#fffdf9] transition-all"
                  >
                    <div className="p-0.5 sm:p-1 rounded bg-[#ebdcb9] text-[#2c1d0e] group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <IconComp className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif-title font-black text-[10px] sm:text-sm text-[#2c1d0e] leading-tight whitespace-nowrap">
                        {loc.name}
                      </span>
                      <span className="font-handwriting text-[9px] sm:text-xs text-[#5c4329] leading-none whitespace-nowrap hidden sm:inline">
                        {loc.subtitle}
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Explorer Character (Bottom Left) */}
      <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-30 pointer-events-auto flex items-end gap-2 sm:gap-3">
        <div className="relative flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={speechText}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-[#f5efeb] text-[#2c1d0e] border sm:border-2 border-[#b88d4b] px-2.5 py-1 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl max-w-[140px] sm:max-w-xs font-handwriting text-xs sm:text-lg font-bold relative mr-1.5 sm:mr-2"
            >
              {speechText}
              <div className="absolute -right-1.5 bottom-3 sm:bottom-4 w-0 h-0 border-t-[4px] sm:border-t-[6px] border-t-transparent border-b-[4px] sm:border-b-[6px] border-b-transparent border-l-[6px] sm:border-l-[8px] border-l-[#b88d4b]" />
            </motion.div>
          </AnimatePresence>

          <motion.button
            onClick={handleCharacterClick}
            animate={{
              y: [0, -4, 0],
              rotate: characterState === "talking" ? [0, 5, -5, 0] : 0
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            className="w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-[#ebdcb9] border-2 sm:border-3 border-[#2c1d0e] shadow-xl flex items-center justify-center text-xl sm:text-3xl relative cursor-pointer"
          >
            <span>👩‍🌾</span>
            <motion.span
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -bottom-1 -right-1 text-xs sm:text-base bg-[#f5efeb] rounded-full p-0.5 border border-[#2c1d0e]"
            >
              🐱
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* Zoom Controls (Bottom Right) */}
      <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 z-30 pointer-events-auto">
        <MapControls
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onReset={handleReset}
        />
      </div>

      {/* Destination Modal View */}
      <LocationModal
        location={selectedLocation}
        onClose={() => setSelectedLocation(null)}
      />
    </div>
  );
}