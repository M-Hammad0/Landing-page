import React from 'react'

function SignIn() {
      return (
            <section  id="sign-in">
                  <div className="sign-in-card card">
      <div className="card-box card-body">
        <h2 className="card-title">Get early access today</h2>
        <p className="card-text">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
          questions, our support team would be happy to help you.</p>
        <div className="submit-box">
          <form className="form-box form-inline">
            <div className="email-box form-group mx-sm-3 mb-2">
              <input type="email" className="input-box form-control" id="inputPassword2" placeholder="email@example.com" />
            </div>
            <div className="btn-box">
            <button type="submit" className="get-started-btn btn btn-primary mb-2">Get Started for free</button>
          </div>
          </form>
        </div>
      </div>

      
    </div>
            </section>

      )
}

export default SignIn
