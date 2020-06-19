import React from "react";
import "animate.css";
import "./Landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div className='landing-container'>
        <div className='landing-content'>
          <header className='landing-header animate__animated animate__slideInDown'>
            Dawitt/Maldonado Studios
          </header>
          <hr className='landing-line-break'></hr>
          <div className='landing-nav'>
            <ul className='nav-list'>
              <li className='nav-item'>
                <a
                  href='#'
                  className='nav-link animate__animated animate__fadeIn animate__delay-1s'
                >
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#'
                  className='nav-link animate__animated animate__fadeIn animate__delay-2s'
                >
                  Work
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#'
                  className='nav-link animate__animated animate__fadeIn animate__delay-3s'
                >
                  Press
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#'
                  className='nav-link animate__animated animate__fadeIn animate__delay-4s'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
