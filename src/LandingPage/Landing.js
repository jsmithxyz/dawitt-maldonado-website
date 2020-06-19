import React from "react";
import "./Landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div className='landing-container'>
        <div className='landing-content'>
          <header className='landing-header'>Dawitt/Maldonado Studios</header>
          <div className='landing-nav'>
            <ul className='nav-list'>
              <li className='nav-item'>About</li>
              <li className='nav-item'>Work</li>
              <li className='nav-item'>Press</li>
              <li className='nav-item'>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
