import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images')
    console.log(docs);
    let clss = ['zoom-in', 'zoom-out']
    // let name = clss[Math.floor(Math.random() * clss.length)]
    // console.log(name);
    return (
        <div className="container">
            <div className="img-grid">
                {docs && docs.map(doc => {
                    let name = clss[Math.floor(Math.random() * clss.length)];
                    return (
                        < motion.div className='img-wrap' data-aos={name} key={doc.id}
                            layout
                            whileHover={{ opacity: 1 }}
                            onClick={() => setSelectedImg(doc.url)}>

                            <motion.img src={doc.url} alt="Pic"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            />
                        </motion.div>
                    )
                }
                )}
            </div>
        </div >

    )
}

export default ImageGrid



