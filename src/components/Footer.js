import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Footer(props) {
	return (
<footer>
            <div className="footer-row">
                <div className="footer-double-col">
                    <p className="footer-title">Connect With Us</p>
                    <p className="footer-body">
                        Stay updated on early discounts, special events, and upcoming films!
                    </p>
                    <Link to="http://lb.benchmarkemail.com//listbuilder/signupnew?7PVqr1DZMmC1N1wrbOhu%252FKjeOq6S3efoZZRe6SX02HP5mj5OqPbK3uMzIjNtMjwz">
                        <button className="footer-btn grow">Sign up for our newsletter!</button>
                    </Link>
                    <div className="icon-row">
                        <a href="https://www.facebook.com/cmufaces" className="footer-icon-container">
                            <img className="footer-icon" src="../Assets/Footer/fb-icon.svg" />
                        </a>
                        <a href="https://www.instagram.com/cmuintlfilmfest/" className="footer-icon-container">
                            <img className="footer-icon" src="../Assets/Footer/insta-icon.svg" />
                        </a>
                        <a href="https://twitter.com/cmu_faces" className="footer-icon-container">
                            <img className="footer-icon" src="../Assets/Footer/twitter-icon.svg" />
                        </a>
                    </div>
                </div>
                <div className="footer-col">
                    <button className="footer-title footer-dropdown">2020 Festival</button>
                    <div className="footerSublinkContainer">
                        <Link className="footer-link" href="/films/garbage">Garbage</Link>
                        <Link className="footer-link" href="/theme">Theme</Link>
                        <Link className="footer-link" href="/schedule">Virtual Film Festival Schedule</Link>
                        <Link className="footer-link" href="/sponsor">Sponsors</Link>
                        <Link className="footer-link" href="/team">Team</Link>
                        <Link className="footer-link" href="/news">News & Stories</Link>
                        <Link className="footer-link" href="/sfc">Short Film Competition</Link>
                    </div>
                </div>
                <div className="footer-col">
                    <button className="footer-title footer-dropdown">About</button>
                    <div className="footerSublinkContainer">
                        <Link to="/about" className="footer-link">Mission & History</Link>
                        <Link to="previous_festivals" className="footer-link">Previous Festivals</Link>
                        <Link to="/education" className="footer-link">Education</Link>
                        <Link to="/contact" className="footer-link">Contact</Link>     
                    </div>             
                </div>
                <div className="footer-col">
                    <button className="footer-title footer-dropdown">Support</button>
                    <div className="footerSublinkContainer">
                        <Link to="/sponsor" className="footer-link">Sponsorship</Link>
                        <Link to="/ad_opportunities" className="footer-link">Ad Opportunities</Link>
                        <Link to="/internships" className="footer-link">Get Involved</Link>
                        <a href="https://cmu.secure.force.com/pmtx/giftselect?id=a41f4000000eIV5,a41f4000000eHw6&appeal=A4700" className="footer-link">Donate</a>   
                    </div>  
                </div>
            </div>
            <p className="footer-subtitle">© 2020 Carnegie Mellon International Film Festival</p>
        </footer>
		);
}

export default Footer;