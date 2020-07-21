import React from 'react'
import icon1 from '../images/icon-access-anywhere.svg'
import icon2 from '../images/icon-security.svg'
import icon3 from '../images/icon-collaboration.svg'
import icon4 from '../images/icon-any-file.svg'

function Features() {
      return (
<section id="features">
    <div class="row">
      <div class="col-lg-6">
        <img class="fix" src={icon1} alt="" />
        <h5>Access your files, anywhere</h5>

        <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you
          everywhere.</p>
      </div>
      <div class="col-lg-6">
        <img src={icon2} alt="" />
        <h5>Security you can trust</h5>

        <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to
          help secure your files.</p>
      </div>
      <div class="col-lg-6">
        <img src={icon3} alt="" />
        <h5>Real-time collaboration</h5>

        <p>Securely share files and folders with friends, family and colleagues for live collaboration.No email
          attachments required.</p>
      </div>
      <div class="col-lg-6">
        <img src={icon4}  alt="" />
        <h5>Store any type of file</h5>

        <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to
          be securely stored and shared.</p>
      </div>
    </div>
  </section>
      )
}

export default Features
