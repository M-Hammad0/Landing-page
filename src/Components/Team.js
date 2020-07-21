import React from 'react'
import img1 from '../images/illustration-stay-productive.png'
import img2 from '../images/icon-arrow.svg'
 

function Team() {
      return (
<section id="team">
    <div class="row">
      <div class="col-lg-6">
        <img class="img-fluid" src={img1} alt="" />
      </div>

      <div class="col-lg-6">
        <div class="team-text">
          <h1>Stay productive, wherever you are</h1>
          <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
            storage needs.</p>

          <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email
            attachments required.</p>

          <a href="/">See how Fylo works<img class="arrow" src={img2} alt="" /></a>
        </div>
      </div>
    </div>
  </section>
      )
}

export default Team
