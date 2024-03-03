import React, {useState, useEffect} from 'react'
import {motion, AnimatePresence} from "framer-motion"
import data from '../components/variants/Picture'
import { SingleImg } from '../components/SingleImage'
import { Helmet} from 'react-helmet-async';
import pageVariant from '../components/variants/PageVariants'
import buttonVariant from '../components/variants/buttonVariant'
import "../styles/gallerypage.css"

const Filter = ({filter, setFilter}) => {
  return (
    <div className='filter-btns'>
        <motion.button
        variants={buttonVariant}
            whileHover='hover'
             className={filter === "" ?'ftr-btn active-btn' : "ftr-btn"} onClick={() => setFilter("")}>All</motion.button>
        <motion.button
        variants={buttonVariant}
            whileHover='hover'
             className={filter === "outreach" ?'ftr-btn active-btn' : "ftr-btn"} onClick={() => setFilter("outreach")}>Outreach</motion.button>
        <motion.button
        variants={buttonVariant}
            whileHover='hover'
             className={filter === "picnic" ?'ftr-btn active-btn' : "ftr-btn"} onClick={() => setFilter("picnic")}>Picnic</motion.button>
    </div>
  )
}

export const GalleryPage = () => {
  const [collection, setCollection] = useState(data)
    const [filter, setFilter] = useState("")
    useEffect(() => {
        if (filter === ""){
            setCollection(data)
            return

        }
        setCollection(data.filter(each => each.ctg === filter))
    }, [filter])
  return (
    <motion.div
    className='gallerypage'
    variants={pageVariant}
    initial="start"
    animate="end"
    exit="exit"
    >
      <Helmet>
        <title>Gallery | NGO</title>
      </Helmet>
      <motion.div>
        <h3 className='our-gallery-text'>Our Gallery</h3>
      </motion.div>
      <Filter setFilter={setFilter} filter={filter}/>
      <motion.div className='gallery-outer' layout
    >
        <AnimatePresence>
            {collection.map((each, idx) => {
                return(
                    <SingleImg card={each} key={idx}/>
                )
            })}
        </AnimatePresence>

    </motion.div>
      </motion.div>
  )
}
