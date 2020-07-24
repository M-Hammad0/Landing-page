import React, { useEffect } from 'react'
import quote from '../images/bg-quotes.png'
import p1 from '../images/profile-1.jpg'
import p2 from '../images/profile-2.jpg'
import p3 from '../images/profile-3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Testimonials() {
  useEffect(() => {
    AOS.init({duration: 800, delay: 300})
  })
      return (
            <section id="testimonials">
    <div className="quote">
      <img src={quote} alt="" />
    </div>

    <div className="row">
      <div data-aos="slide-right" className="text-box col-lg-4">
        <div className="card border-0">
          <div className="card-box card-body">
            <p className="card-text">Fylo has improved our team productivity by an order of magnitude. Since making the
              switch
              our team has
              become a well-oiled collaboration machine.</p>

            <table>
            <tbody>
              <tr>
                <td className="table-div" rowSpan="2"><img className="profile-pic" src={p1} alt="" /></td>
                <td>Satish Patel</td>
              </tr>
              <tr>
                <td>Founder & CEO, Huddle</td>
              </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
      <div data-aos="slide-right" className="text-box col-lg-4">
        <div className="card border-0">
          <div className="card-box card-body">
            <p className="card-text">Fylo has improved our team productivity by an order of magnitude. Since making the
              switch our team has
              become a well-oiled collaboration machine.</p>
            <table>
            <tbody>
              <tr>
                <td className="table-div" rowSpan="2"><img className="profile-pic" src={p2} alt="" /></td>
                <td>Bruce McKenzie</td>
              </tr>
              <tr>
                <td>Founder & CEO, Huddle</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div data-aos="slide-right" className="text-box col-lg-4">
        <div className="card border-0">
          <div className="card-box card-body">
            <p className="card-text">
              Fylo has improved our team productivity by an order of magnitude. Since making the
              switch our team has
              become a well-oiled collaboration machine.</p>
            <table>
            <tbody>
              <tr>
                <td className="table-div" rowSpan="2"><img className="profile-pic" src={p3} alt="" /></td>
                <td>Iva Boyd</td>
              </tr>
              <tr>
                <td>Founder & CEO, Huddle</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

      )
}

export default Testimonials
