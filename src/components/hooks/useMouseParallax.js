// src/hooks/useMouseParallax.js
import { useEffect, useState } from "react";

const useMouseParallax = (strength = 20) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX / innerWidth) - 0.5) * strength;
      const y = ((e.clientY / innerHeight) - 0.5) * strength;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [strength]);

  return offset;
};

export default useMouseParallax;
