'use-client'

import { bike8 } from "../assets/images"
import Button from "../components/Button"
import { motion } from 'framer-motion'

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
      <motion.h2 
          className="mt-10 font-palanquin text-4xl capitalize font-bold text-yellow-50 lg:max-w-lg"
          initial= {{ opacity: 0, x: -100 }}
          whileInView= {{ opacity: 1, x: 0 }}
          exit= {{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
      >
         We Bring You 
          <motion.span 
              className="text-coral-red"
              initial={{ opacity: 0, scale:0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1 }}        
          > Super</motion.span>
          <motion.span 
              className="text-coral-red"
              initial={{ opacity: 0, scale:0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1 }}        
          > Quality Bike</motion.span>
      </motion.h2>
        <p className="mt-4 lg:max-w-lg info-text">Bicycles that combine  performance <strong>style</strong> and <strong>performance</strong>, you a unique riding experience. Our products are designed for the most discerning cyclists, with meticulous attention to detail, from elegant  . <strong>aesthetics</strong>  to exceptional<strong>desempenho</strong>  performance.</p>

        <p className="mt-6 lg:max-w-lg info-text">Discover a new and exciting way to explore the world on two wheels with our superior quality bikes.</p>

        <motion.div 
          className="mt-11"
          initial= {{ opacity: 0, x: -200 }}
          whileInView= {{ opacity: 1, x: 0 }}
          exit= {{ opacity: 0, x: -200 }}
          transition={{ duration: 0.5 }}
        >
        <Button label="See details"/>
        </motion.div >
      </div>

      <motion.div 
          className="flex-1 flex justify-center items-center"
          initial= {{ opacity: 0, y: -100 }}
          whileInView= {{ opacity: 1, y: 0 }}
          exit= {{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img 
          src={bike8}
          alt="Modelo Bike numero 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </motion.div>

    </section>
  )
}

export default SuperQuality