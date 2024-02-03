import Button from "../components/Button"
import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { statistics, bikes } from '../constants'
/* import { bigShoe1 } from "../assets/images" */
import { bigBike1 } from "../assets/images"
import BikeCard from "../components/BikeCard"
import { motion } from 'framer-motion'

const Hero = () => {
  // alterar "bigShoe1" pela nova imagem "bigBike1"
  const [bigBikeImage, setbigBikeImage] = useState(bigBike1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <motion.div 
          className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"
          initial= {{ opacity: 0, x: -100 }}
          whileInView= {{ opacity: 1, x: 0 }}
          exit= {{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}          
      >
        <p className="text-xl font-montserrat text-coral-red">For those seeking adventure</p>
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text[72px] max-sm:leading-[82px] font-bold text-yellow-50 md:z-1">
          <span className="xl:bg-zinc-900 xl:whitespace-nowrap relative z-10 max-lg:z-0 pr-10 text-yellow-50">New models</span>
          <br />
          <motion.span 
              className="text-coral-red inline-block mt-3"
              initial={{ opacity: 0, scale:0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
          >Tsion-Bike</motion.span> Shop
      </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Find the latest news to cycle safely, quickly, and at a good price.</p>
        <motion.div
          initial={{ opacity: 0, scale:0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 , delay: 0.2}}
        >
          <Button 
            label="Show now"
            iconURL={arrowRight}
          />
        </motion.div>


        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold text-yellow-50">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
            ))}
        </div>
      </motion.div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <motion.div
            initial={{  opacity: 0}}
            whileInView={{ opacity: 1, y: 1, scale: 1 }}
            exit={{ opacity: 0, y: 200, scale: 0.5 }}
            transition={{ duration: 2 }}
        >
            <img
              src={bigBikeImage}
              alt="bike collection"
              width={510}
              height={400}
              className="object-contain relative z-10"
            />
        </motion.div>


        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {bikes.map((bike) => (
            <div key={bike}>
              <BikeCard
                imgURL={bike} 
                changeBigBikeImage = {(bike) => setbigBikeImage (bike)}
                bigBikeImage={bigBikeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero