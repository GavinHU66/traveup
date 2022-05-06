   
import React, { Component } from 'react';
import '../homepage.css';

class Homepage extends Component {
  render() {
    let title = "Simplify your team matching process!";
    let description = "Travel-Up is an employee management platform that organizes project teams efficiently according to employee backgrounds and interests, and thus improves employees’ learning experience, career development, diversity, and team working efficiency.";
    return (
        <div id="homepage">
            <h1>{title}</h1>
            <p>{description}</p>
            <div>
              <button>Start</button>
              <button>Learn more</button>
            </div>
        </div>
    );
  }
}

export default Homepage;
