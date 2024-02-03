'use-client'

import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <motion.div
                initial={{ opacity: 0, scale:0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 , delay: 0.2}}
            >
            <img 
              src={footerLogo} 
              alt="icone de logo BikerStore" 
              width={150}
              height={46}
            />
            </motion.div>
          </a>
          <p className="mt-6 leading-7 font-montserrat text-white-400 sm:max-w-sm">Find one of our physical stores closest to you and come visit us.</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-coral-red ">
                <img 
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {footerLinks.map((section) => (
                <div key={section}>
                  <h4 className="text-white font-montserrat font-medium mb-6 text-2xl leading-normal">{section.title}</h4>
                  <ul>
                    {section.links.map((link) => (
                      <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 cursor-pointer" key={link.name}>
                       
                        <a>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img 
              src={copyrightSign} 
              alt="Copyright"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
           <small> Copyright. All rights reserved. <a href="https://natiw.netlify.com">(Developed by Natnael)</a> <br /> <a 
              className="underline"
              // href="https://www.instagram.com//" 
              target="_blank">Tsion Bike-Store</a></small>
        </div>
        <p className="font-montserrat cursor-pointer mt-1 text-sm"></p>
      </div>
    </footer>
  )
}

export default Footer