import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ScrollAnimation = ({ 
  children, 
  threshold = 0.1, 
  rootMargin = '0px',
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6, ease: "easeOut" },
  className = '',
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold, rootMargin);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isVisible ? animate : initial}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;