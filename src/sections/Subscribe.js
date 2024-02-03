'use-client'

import Button from "../components/Button"
import { motion } from 'framer-motion'

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-yellow-50 text-4xl leading-[68px] max-w-xl font-palanquin font-bold">Sign up for <motion.span      className="text-coral-red"
      initial={{ opacity: 0, scale:0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 , delay: 0.1}}
      >News  </motion.span > & Newsletter
      </h3>
      <div className="lg:max-w-[50%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input 
          type="text" 
          placeholder="subscribe@TsionW.com"
          className="input bg-transparent"
        />
        <motion.div 
            className="flex max-sm:justify-center items-center max-sm:w-full"
            initial={{ opacity: 0, scale:0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 , delay: 0.2}}
        >
          <Button
            label="Sign-Up"
            fullWidth
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Subscribe