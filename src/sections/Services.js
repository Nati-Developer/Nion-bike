'use-client'

import ServiceCard from '../components/ServiceCard'
import { services } from '../constants'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.section 
        className="max-container flex justify-center flex-wrap gap-9"
        initial= {{ opacity: 0, x: -100 }}
        whileInView= {{ opacity: 1, x: 0 }}
        exit= {{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
    >

    {services.map((service) => (
      <ServiceCard key={service.label} 
      {...service} />
    ))}
    </motion.section>
  )
}

export default Services