import React, { useRef, useCallback, useEffect } from 'react';
import './AnimatedImage.css';

const clamp = (value, min = 0, max = 100) => Math.min(Math.max(value, min), max);
const round = (value, precision = 3) => parseFloat(value.toFixed(precision));

const AnimatedImage = ({ src, alt, className = '' }) => {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);

  const updateTransform = useCallback((offsetX, offsetY, img, wrap) => {
    const width = img.clientWidth;
    const height = img.clientHeight;

    const percentX = clamp((100 / width) * offsetX);
    const percentY = clamp((100 / height) * offsetY);

    const centerX = percentX - 50;
    const centerY = percentY - 50;

    const rotateX = round(-(centerX / 8));
    const rotateY = round(centerY / 6);

    wrap.style.setProperty('--rotate-x', `${rotateX}deg`);
    wrap.style.setProperty('--rotate-y', `${rotateY}deg`);
  }, []);

  const handlePointerMove = useCallback((event) => {
    const img = imgRef.current;
    const wrap = wrapRef.current;

    if (!img || !wrap) return;

    const rect = img.getBoundingClientRect();
    updateTransform(
      event.clientX - rect.left,
      event.clientY - rect.top,
      img,
      wrap
    );
  }, [updateTransform]);

  const handlePointerEnter = useCallback(() => {
    const wrap = wrapRef.current;
    if (wrap) {
      wrap.classList.add('active');
    }
  }, []);

  const handlePointerLeave = useCallback(() => {
    const wrap = wrapRef.current;
    if (wrap) {
      wrap.classList.remove('active');
      wrap.style.setProperty('--rotate-x', '0deg');
      wrap.style.setProperty('--rotate-y', '0deg');
    }
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    img.addEventListener('pointerenter', handlePointerEnter);
    img.addEventListener('pointermove', handlePointerMove);
    img.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      img.removeEventListener('pointerenter', handlePointerEnter);
      img.removeEventListener('pointermove', handlePointerMove);
      img.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [handlePointerMove, handlePointerEnter, handlePointerLeave]);

  return (
    <div ref={wrapRef} className={`animated-image-wrapper ${className}`.trim()}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="animated-image"
      />
    </div>
  );
};

export default AnimatedImage;