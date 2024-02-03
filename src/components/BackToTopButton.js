import { useState, useEffect } from 'react';
import { arrowUp } from "../assets/icons"
import { motion } from 'framer-motion';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Mostra o botão quando o usuário rolar a página para baixo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      className={`${
        showButton ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      } fixed bottom-10 right-10 bg-coral-red hover:bg-blue-600 z-11 text-white rounded-full p-3 transition-opacity transition-scale duration-300 ease-in-out`}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: showButton ? 1 : 0, scale: showButton ? 1 : 0 }}
    >
      <img
        src={arrowUp}
        className="h-6 w-6" 

      />
    </motion.button>
  );
};

export default BackToTopButton;
