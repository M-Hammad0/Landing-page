import React from 'react'
import logo from '../images/logo.svg'
function Header() {
      return (
            <nav class="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm">
    <a class="navbar-brand" href="/">
      <img class="logo" src={logo} alt="logo" />
    </a>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#features">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#team">Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#sign-in">sign in</a>
      </li>
    </ul>
  </nav>
      )
}

export default Header
