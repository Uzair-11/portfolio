import { useEffect, useRef } from 'react';

const useScrollTilt = (baseAngle = 0, maxDelta = 2.5) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId;

    const handleScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate when near or in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const centerOffset = (rect.top + rect.height / 2) - (windowHeight / 2);
        const normalized = centerOffset / (windowHeight / 2); // -1 to +1
        const tilt = baseAngle + normalized * maxDelta;
        el.style.transform = `rotate(${tilt.toFixed(2)}deg)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial position setup

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [baseAngle, maxDelta]);

  return ref;
};

export default useScrollTilt;
