import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef    = useRef(null);
  const ringRef   = useRef(null);
  const pos       = useRef({ x: -200, y: -200 });
  const ring      = useRef({ x: -200, y: -200 });
  const animRef   = useRef(null);
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [onLink,  setOnLink]  = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Detect if hovering over interactive elements
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const interactive = el?.closest('a, button, input, textarea, select, [role="button"], label');
      setOnLink(!!interactive);
    };

    const onLeave  = () => setVisible(false);
    const onDown   = () => setClicked(true);
    const onUp     = () => setClicked(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    // Smooth ring follow with lerp
    function animate() {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [visible]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      {/* Hide native cursor globally */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* Inner dot — snaps instantly to cursor */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: clicked ? '6px' : '8px',
          height: clicked ? '6px' : '8px',
          borderRadius: '50%',
          background: onLink ? '#e879f9' : '#06b6d4',
          boxShadow: onLink
            ? '0 0 12px 3px rgba(232,121,249,0.8)'
            : '0 0 12px 3px rgba(6,182,212,0.8)',
          transform: 'translate(-200px, -200px)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: 'width 0.15s, height 0.15s, background 0.2s, box-shadow 0.2s, opacity 0.3s',
          marginLeft: '-4px',
          marginTop: '-4px',
          willChange: 'transform',
        }}
      />

      {/* Outer ring — lags behind for smooth trail effect */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: onLink ? '44px' : clicked ? '28px' : '36px',
          height: onLink ? '44px' : clicked ? '28px' : '36px',
          borderRadius: '50%',
          border: `1.5px solid ${onLink ? 'rgba(232,121,249,0.6)' : 'rgba(6,182,212,0.5)'}`,
          background: onLink
            ? 'rgba(232,121,249,0.06)'
            : clicked
            ? 'rgba(6,182,212,0.12)'
            : 'transparent',
          transform: 'translate(-200px, -200px)',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          transition: 'width 0.25s cubic-bezier(0.25,1,0.5,1), height 0.25s cubic-bezier(0.25,1,0.5,1), border-color 0.2s, background 0.2s, opacity 0.3s',
          marginLeft: onLink ? '-22px' : clicked ? '-14px' : '-18px',
          marginTop:  onLink ? '-22px' : clicked ? '-14px' : '-18px',
          willChange: 'transform',
          backdropFilter: 'blur(0px)',
        }}
      />
    </>
  );
}
