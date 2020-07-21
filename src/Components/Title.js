import React from 'react'
import img from '../images/illustration-intro.png'
function Title() {
      return (
            <section id="title">
            <div class="container-fluid">
              <img class="img-fluid" src={img} alt="" />
              <div class="title-text">
                <h1>All your files in one secure location, accessible anywhere.</h1>
        
                <p>Fylo stores all your most important files in one secure location. Access them wherever
                  you need, share and collaborate with friends family, and co-workers.</p>
        
                <button class="get-started-btn btn btn-primary btn-lg">Get Started</button>
              </div>
            </div>
          </section>
      )
}

export default Title
