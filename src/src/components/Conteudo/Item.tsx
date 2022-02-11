import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import type {ContentItem} from "../../types"

const Item: React.FC<ContentItem> = ({children, show}) => {
    
  return (
    <>
          <AnimatePresence>
              {
                  show && (
                      <motion.div
                          animate={{ y: 50 }}
                          transition={{
                              delay: 0,
                              y: { type: "spring", stiffness: 600 },
                              default: { duration: 2 },
                          }}
                          exit={{ opacity: 0 }}
                      >
                          {children}
                      </motion.div>
                  )
              }
          </AnimatePresence>  
    </>
  )
}

export default Item