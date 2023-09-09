import React from 'react'
import {useState, useEffect, useRef} from 'react'
import {motion} from 'framer-motion'
import '../styles/BolosStyle.css'

import bolo1 from '../assets/bolos/001.png'
import bolo2 from '../assets/bolos/002.png'
import bolo3 from '../assets/bolos/003.png'
import bolo4 from '../assets/bolos/004.png'
import bolo5 from '../assets/bolos/005.png'
import bolo6 from '../assets/bolos/006.png'
import bolo7 from '../assets/bolos/007.png'
import bolo8 from '../assets/bolos/008.jpg'
import bolo9 from '../assets/bolos/009.png'
import bolo10 from '../assets/bolos/010.png'
import bolo11 from '../assets/bolos/011.png'
import bolo12 from '../assets/bolos/012.png'
import bolo13 from '../assets/bolos/013.png'
import bolo14 from '../assets/bolos/014.png'
import bolo15 from '../assets/bolos/015.png'
import bolo16 from '../assets/bolos/016.png'

const cakes = [bolo1, bolo2, bolo3, bolo4, bolo5, bolo6, bolo7, bolo8, bolo9, bolo10, bolo11, bolo12, bolo13, bolo14, bolo15, bolo16]

function Bolos() {

    const carrousel = useRef()
    // const [height, setHeight] = useState(0)

    // useEffect(() => {
    //     console.log(carrousel.current?.offsetHeight, carrousel.current?.scrollHeight)
    //     setHeight(carrousel.current?.scrollHeight - carrousel.current?.offsetHeight)
    // }, [])
    // console.log(height)

  return (
    <div className='Container'>


        <h1>Bolos Confeitados</h1>
      <motion.div className='carrousel' whileTap={{cursor: "grabbing"}} ref={carrousel}>

        <motion.div className='innerCarrousel' drag="y" dragConstraints={{bottom: 0, top: -6880}}>

            {cakes.map(bolo => 
                <motion.div className='item' key={bolo}>
                    <img src={bolo} alt="teste"/>
                </motion.div>

            )}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Bolos
