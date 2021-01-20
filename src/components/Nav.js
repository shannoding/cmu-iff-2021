import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import '../styles/nav.scss';

// <img src="../Assets/Index/CMU-IFF_Logo.svg" />

function Nav() {
	return (
		<nav id="nav" className="navbar navbar-expand-xl">
            <Link to="/" className="logo">
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle first-nav-link" to="/" id="navbarDropdown" role="button" data-toggle="dropdown">2020 Festival</Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/films/garbage">Garbage</Link>
                            <Link className="dropdown-item" to="/theme">Theme</Link>
                            <Link className="dropdown-item" to="/schedule">Virtual Film Festival Schedule</Link>
                            <Link className="dropdown-item" to="/sponsors">Sponsors</Link>
                            <Link className="dropdown-item" to="/team">Team</Link>
                            <Link className="dropdown-item" to="/news">News & Stories</Link>
                            <Link className="dropdown-item" to="/sfc">Short Film Competition</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle first-nav-link" to="#" id="navbarDropdown" role="button" data-toggle="dropdown">About Us</Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/about">Mission & History</Link>
                            <Link className="dropdown-item" to="/previous_festivals">Previous Festivals</Link>
                            <Link className="dropdown-item" to="/education">Education</Link>
                            <Link className="dropdown-item" to="/contact">Contact</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown">Support Us</Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/sponsor">Sponsorship</Link>
                            <Link className="dropdown-item" to="/ad_opportunities">Ad Opportunities</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="../Internships/internships.html">Get Involved</Link>
                    </li>
                    <li className="nav-item">
                        <a href="https://cmu.secure.force.com/pmtx/giftselect?id=a41f4000000eIV5,a41f4000000eHw6&appeal=A4700">
                            <button className="nav-btn grow">Donate</button>
                        </a>  
                    </li>
                    <li className="nav-item">
                        <Link to="/tickets">
                            <button className="nav-btn grow">Buy Tickets</button>
                        </Link>  
                    </li>
                </ul>
            </div>
        </nav>

		);
}

export default Nav;