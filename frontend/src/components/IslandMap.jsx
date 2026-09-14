import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// हे सगळे IslandMap च्या सोबत एकाच 'components' फोल्डरमध्ये आहेत म्हणून ./ वापरले आहे
import LocationModal from './LocationModal';
import MapControls from './MapControls';
import ExploreMenu from './ExploreMenu';
import ExplorerCharacter from './ExplorerCharacter';

// Lucide icons
import { Sparkles, Ship, Radio, Landmark, Anchor, FlaskConical, GraduationCap, Castle } from 'lucide-react';
const MAP_IMAGE_URL = "/map-artwork.png";

const mapLocations = [
  { id: "palace", name: "Palace", subtitle: "About Me", x: 27.5, y: 41.5, width: "12%", height: "8%" },
  { id: "academy", name: "Academy", subtitle: "Education", x: 57.8, y: 33.5, width: "12%", height: "8%" },
  { id: "research", name: "Research Lab", subtitle: "AI • Data Science • CS", x: 73.5, y: 45.5, width: "13%", height: "8%" },
  { id: "harbor", name: "Project Harbor", subtitle: "My Projects", x: 35.5, y: 75.0, width: "14%", height: "8%" },
  { id: "museum", name: "Museum", subtitle: "Certifications & Achievements", x: 60.0, y: 72.0, width: "14%", height: "8%" },
  { id: "satellite", name: "Satellite Station", subtitle: "Contact & Links", x: 92.0, y: 57.0, width: "12%", height: "8%" }
];

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
  const [speechText, setSpeechText] = useState("Tap any location! ♡");
  const canvasRef = useRef(null);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.3, 2.2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.3, 0.7));
  const handleReset = () => setZoom(1);

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
  };

  const handleSelectLocation = (loc) => {
    setSelectedLocation(loc);
    if (loc) {
      setSpeechText(`Exploring ${loc.name}! ✨`);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#dcc4a4] select-none touch-none">
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30">
        <ExploreMenu onSelectLocation={handleSelectLocation} />
      </div>

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
            <img
              src={MAP_IMAGE_URL}
              alt="Shruti's Island Interactive Map"
              className="w-full h-full object-contain drop-shadow-2xl select-none"
              draggable={false}
            />

            <canvas
              ref={canvasRef}
              className="absolute inset-0 pointer-events-none z-10 w-full h-full"
            />

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

            {mapLocations.map((loc) => {
              const IconComp = locationIcons[loc.id] || Sparkles;
              return (
                <div
                  key={loc.id}
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                  onClick={() => handleSelectLocation(loc)}
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

      <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-30 pointer-events-auto">
        <ExplorerCharacter
          speechText={speechText}
          onCharacterClick={handleCharacterClick}
        />
      </div>

      <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 z-30 pointer-events-auto">
        <MapControls
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onReset={handleReset}
        />
      </div>

      <LocationModal
        location={selectedLocation}
        onClose={() => setSelectedLocation(null)}
      />
    </div>
  );
}