import React from 'react'

function SignIn() {
      return (
            <section id="sign-in">
                  <div class="sign-in-card card">
      <div class="card-box card-body">
        <h2 class="card-title">Get early access today</h2>
        <p class="card-text">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
          questions, our support team would be happy to help you.</p>
        <div class="submit-box">
          <form class="form-box form-inline">
            <div class="email-box form-group mx-sm-3 mb-2">
              <input type="email" class="input-box form-control" id="inputPassword2" placeholder="email@example.com" />
            </div>
            <div class="btn-box">
            <button type="submit" class="get-started-btn btn btn-primary mb-2">Get Started for free</button>
          </div>
          </form>
        </div>
      </div>

      
    </div>
            </section>

      )
}

export default SignIn
