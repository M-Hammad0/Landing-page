import React,{useEffect} from 'react'
import img1 from '../images/illustration-stay-productive.png'
import img2 from '../images/icon-arrow.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Team() {
  useEffect(() => {
    AOS.init({duration: 3500, delay: 1000})
  })
      return (
<section data-aos="fade-up-right" id="team">
    <div className="row">
      <div className="col-lg-6">
        <img className="img-fluid" src={img1} alt="" />
      </div>

      <div className="col-lg-6">
        <div className="team-text">
          <h1>Stay productive, wherever you are</h1>
          <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
            storage needs.</p>

          <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email
            attachments required.</p>

          <a href="/">See how Fylo works<img className="arrow" src={img2} alt="" /></a>
        </div>
      </div>
    </div>
  </section>
      )
}

export default Team
