'use-client'

import { offer } from "../assets/images"
import Button from "../components/Button"
import { purchase } from "../assets/icons"
import { motion } from 'framer-motion'

const SpecialOffer = () => {
  return (
    <section 
        id="specialOffer"
        className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <motion.div 
          className="flex-1 lg:flex lg:items-center lg:justify-center"
          initial= {{ opacity: 0, x: -100 }}
          whileInView= {{ opacity: 1, x: 0 }}
          exit= {{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}      
      >
        <img src={offer} width={773} height={687} className="object-contain w-full lg:w-9/12"/>
      </motion.div>
      <div className="flex flex-1 flex-col">
      <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold text-yellow-50 lg:max-w-lg">
          <motion.span 
              className="text-coral-red"
              initial={{ opacity: 0, scale:0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
          > Naion
          </motion.span>
          <motion.span
              initial= {{ opacity: 0, y: -100 }}
              whileInView= {{ opacity: 1, y: 0 }}
              exit= {{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.5 }}
          > Super Quality Bikes</motion.span>
      </h2>

        <p className="mt-4 lg:max-w-lg info-text">Don't put off your dream of having your bike turbocharged any longer! Take advantage of the that  <strong>promotions</strong>  and special condition <strong>Biker Store</strong> has prepared for you.</p>

        <p className="mt-6 lg:max-w-lg info-text">Browse our catalog and see the most diverse options and styles of bikes and equipment for radical and safe cycling.</p>

        <motion.div 
            className="mt-11 flex flex-wrap gap-4"
            initial={{ opacity: 0, scale:0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 , delay: 0.2}}
        >
        <Button label="Buy here" iconURL={purchase}/>
        <Button label="See details" backgroundColor="bg-transparent" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </motion.div>
      </div>
    </section>
  )
}

export default SpecialOffer