import React from 'react'
import quote from '../images/bg-quotes.png'
import p1 from '../images/profile-1.jpg'
import p2 from '../images/profile-2.jpg'
import p3 from '../images/profile-3.jpg'

function Testimonials() {
      return (
            <section id="testimonials">
    <div class="quote">
      <img src={quote} alt="" />
    </div>

    <div class="row">
      <div class="text-box col-lg-4">
        <div class="card border-0">
          <div class="card-box card-body">
            <p class="card-text">Fylo has improved our team productivity by an order of magnitude. Since making the
              switch
              our team has
              become a well-oiled collaboration machine.</p>

            <table>
              <tr>
                <td class="table-div" rowspan="2"><img class="profile-pic" src={p1} alt="" /></td>
                <td>Satish Patel</td>
              </tr>
              <tr>
                <td>Founder & CEO, Huddle</td>
              </tr>
            </table>

          </div>
        </div>
      </div>
      <div class="text-box col-lg-4">
        <div class="card border-0">
          <div class="card-box card-body">
            <p class="card-text">Fylo has improved our team productivity by an order of magnitude. Since making the
              switch our team has
              become a well-oiled collaboration machine.</p>
            <table>
              <tr>
                <td class="table-div" rowspan="2"><img class="profile-pic" src={p2} alt="" /></td>
                <td>Bruce McKenzie</td>
              </tr>
              <tr>
                <td>Founder & CEO, Huddle</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="text-box col-lg-4">
        <div class="card border-0">
          <div class="card-box card-body">
            <p class="card-text">
              Fylo has improved our team productivity by an order of magnitude. Since making the
              switch our team has
              become a well-oiled collaboration machine.</p>
            <table>
              <tr>
                <td class="table-div" rowspan="2"><img class="profile-pic" src={p3} alt="" /></td>
                <td>Iva Boyd</td>
              </tr>
              <tr>
                <td>Founder & CEO, Huddle</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

      )
}

export default Testimonials
