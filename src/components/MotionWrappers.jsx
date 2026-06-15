import { motion, useReducedMotion } from 'framer-motion';

// Parent container for staggering children
export const StaggerContainer = ({ children, className = '', delayOrder = 0.1, ...props }) => {
  const shouldReduceMotion = useReducedMotion();
  
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : delayOrder,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Child item that fades in and up
export const FadeInUp = ({ children, className = '', delay = 0, ...props }) => {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0.01 : 0.6, 
        ease: 'easeOut',
        delay: shouldReduceMotion ? 0 : delay 
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Reusable card hover interactions
export const InteractiveCard = ({ children, className = '', ...props }) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      className={className}
      whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02, boxShadow: '0px 10px 30px rgba(0,0,0,0.5)' }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Typing Effect for headlines
export const TypingText = ({ text, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.03 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 200 },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {text.split(' ').map((word, i) => (
        <motion.span key={i} variants={child} style={{ display: 'inline-block', marginRight: '0.25em' }}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
