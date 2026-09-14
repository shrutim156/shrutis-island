import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target;
      const isClickable = target.closest('button, a, [role="button"], input, .clickable');
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: -12,
        top: -12
      }}
    >
      <div
        className={`w-6 h-6 rounded-full border-2 border-[#5c3e1e] bg-[#f2e3c6]/40 backdrop-blur-[1px] flex items-center justify-center transition-all duration-150 ${
          isPointer ? 'scale-150 border-amber-700 bg-amber-200/50' : 'scale-100'
        }`}
      >
        <div className="w-1 h-1 rounded-full bg-[#36220f]" />
      </div>
    </div>
  );
}