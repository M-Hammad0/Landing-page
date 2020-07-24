import React from 'react'
import img from '../images/illustration-intro.png'
import {motion} from 'framer-motion';

function Title() {
      return (
            <motion.section 
            initial={{y: '-100vh'}}
            animate={{y: 0}}
            transition={{duration: 0.5}}
            id="title">
            <div className="container-fluid">
              <img className="img-fluid" src={img} alt="" />
              <div
               className="title-text">
                <h1>All your files in one secure location, accessible anywhere.</h1>
        
                <p>Fylo stores all your most important files in one secure location. Access them wherever
                  you need, share and collaborate with friends family, and co-workers.</p>
        
                <motion.button whileHover={{scale: 1.1}} className="get-started-btn btn btn-primary btn-lg">Get Started</motion.button>
              </div>
            </div>
          </motion.section>
      )
}

export default Title
