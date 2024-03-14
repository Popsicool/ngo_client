import React from 'react'
import {motion} from "framer-motion"
import uam from "../assets/partners/uam.jpeg"



const partners = [
    uam, uam, uam, uam, uam
]
export const Partners = () => {
  return (
    <motion.div className="founder-corner">
        <h3 className='ourpartners'>Our trusted partners</h3>
        <motion.div className='partners-logo'>
            {partners.map((each, idx) => {
                return (
                    <div key={idx} className='partner-wrap'>
                        <img src={each} alt="g" />
                    </div>
                )
            })}
        </motion.div>

      </motion.div>
  )
}
