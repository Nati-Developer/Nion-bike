'use-client'

import PopularProductCard from "../components/PopularProductCard"
import { equipments } from "../constants"
import { motion } from 'framer-motion'

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <motion.div 
          className="flex flex-col justify-start gap-5"
          initial= {{ opacity: 0, x: -100 }}
          whileInView= {{ opacity: 1, x: 0 }}
          exit= {{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl text-yellow-50 font-bold font-palanquin">Our Nion Popular 
        <span 
          className="text-coral-red"
        > Biker
        </span></h2>
        <p className="text-slate-gray lg:max-w-lg mt-2 font-montserrat">Do you want to live an adventure experience at its highest quality? Choose the ideal Bike model and explore your route quickly and safely.</p>

      </motion.div>

      <motion.div 
          className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
          initial= {{ opacity: 0, x: -100 }}
          whileInView= {{ opacity: 1, x: 0 }}
          exit= {{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
      >
        {equipments.map((equipment) => (
          <PopularProductCard
            key={equipment.name}
            {...equipment}
          />
        ))}
      </motion.div>
    </section>
  )
}

export default PopularProducts