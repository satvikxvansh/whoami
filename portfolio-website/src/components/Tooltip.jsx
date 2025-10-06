import { useState, useRef } from 'react';

export function CursorTooltip({ children, content }){
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <>
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="inline-block"
      >
        {children}
      </div>

      {isVisible && (
        <div
          className="fixed z-50 px-3 py-2 text-sm text-white border-1 border-blue-500 bg-blue-950 rounded-lg shadow-lg pointer-events-none"
          style={{
            left: `${position.x + 10}px`,
            top: `${position.y + 10}px`,
          }}
        >
          {content}
        </div>
      )}
    </>
  );
};

// export default CursorTooltip;
