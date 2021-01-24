import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import '../styles/footer.scss';

import fbicon from "../assets/icons/FacebookIcon.png";
import instaicon from "../assets/icons/InstaIcon.png";
import twittericon from "../assets/icons/TwitterIcon.png";

function Footer(props) {

	return (
		<footer id="footer">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-5">
                    <h3>Connect With Us</h3>
                    <p>Stay updated on early discounts, special events, and upcoming films!</p>
                    <a href="http://lb.benchmarkemail.com//listbuilder/signupnew?7PVqr1DZMmC1N1wrbOhu%252FKjeOq6S3efoZZRe6SX02HP5mj5OqPbK3uMzIjNtMjwz">
                        <button className="btn btn-outline-primary footer-btn grow" type="button">Sign up for our newsletter!</button>
                    </a>
                    <div className="icon-row">
                        <a href="https://www.facebook.com/cmufaces" className="footer-icon-container">
                            <img className="footer-icon" src={fbicon} />
                        </a>
                        <a href="https://www.instagram.com/cmuintlfilmfest/" className="footer-icon-container">
                            <img className="footer-icon" src={instaicon} />
                        </a>
                        <a href="https://twitter.com/cmu_faces" className="footer-icon-container">
                            <img className="footer-icon" src={twittericon} />
                        </a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <div class="accordion accordian-flush" id="accordionOne">
					  <div class="accordion-item">
					    <h2 class="accordion-header" id="headingOne">
					      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					        2020 Festival
					      </button>
					    </h2>
					    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionOne">
					      <div class="accordion-body">
					      	<ul className="footerSublinkContainer">
					            <li><Link className="footer-link" to="/films/garbage">Garbage</Link></li>
					            <li><Link className="footer-link" to="/theme">Theme</Link></li>
					            <li><Link className="footer-link" to="/schedule">Virtual Film Festival Schedule</Link></li>
					            <li><Link className="footer-link" to="/sponsor">Sponsors</Link></li>
					            <li><Link className="footer-link" to="/team">Team</Link></li>
					            <li><Link className="footer-link" to="/news">News & Stories</Link></li>
					            <li><Link className="footer-link" to="/sfc">Short Film Competition</Link></li>
					        </ul>
					      </div>
					    </div>
					  </div>
					</div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-2">
                	<div class="accordion accordian-flush" id="accordionTwo">
					  <div class="accordion-item">
					    <h2 class="accordion-header" id="headingTwo">
					      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
					        About
					      </button>
					    </h2>
					    <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionTwo">
					      <div class="accordion-body">
					      	<ul className="footerSublinkContainer">
		                        <li><Link to="/about" className="footer-link">Mission & History</Link></li>
		                        <li><Link to="previous_festivals" className="footer-link">Previous Festivals</Link></li>
		                        <li><Link to="/education" className="footer-link">Education</Link></li>
		                        <li><Link to="/contact" className="footer-link">Contact</Link></li>     
		                    </ul> 
					      </div>
					    </div>
					  </div>
					</div>            
                </div>
                <div className="col-sm-12 col-md-4 col-lg-2">
                	<div class="accordion accordian-flush" id="accordionThree">
					  <div class="accordion-item">
					    <h2 class="accordion-header" id="headingThree">
					      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
					        Support
					      </button>
					    </h2>
					    <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionThree">
					      <div class="accordion-body">
					      	<ul className="footerSublinkContainer">
		                        <li><Link to="/sponsor" className="footer-link">Sponsorship</Link></li>
		                        <li><Link to="/ad_opportunities" className="footer-link">Ad Opportunities</Link></li>
		                        <li><Link to="/internships" className="footer-link">Get Involved</Link></li>
		                        <li><a href="https://cmu.secure.force.com/pmtx/giftselect?id=a41f4000000eIV5,a41f4000000eHw6&appeal=A4700" className="footer-link">Donate</a></li>   
		                    </ul> 
					      </div>
					    </div>
					  </div>
					</div>
                </div>
            </div>
            <p>© 2021 Carnegie Mellon International Film Festival</p>
        </footer>
		);


	return (
		<footer id="footer">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-5">
                    <p className="footer-title">Connect With Us</p>
                    <p className="footer-body">
                        Stay updated on early discounts, special events, and upcoming films!
                    </p>
                    <a href="http://lb.benchmarkemail.com//listbuilder/signupnew?7PVqr1DZMmC1N1wrbOhu%252FKjeOq6S3efoZZRe6SX02HP5mj5OqPbK3uMzIjNtMjwz">
                        <button className="footer-btn grow">Sign up for our newsletter!</button>
                    </a>
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
                <div className="col col-sm-12 col-md-4 col-lg-3">
                    <button className="footer-title footer-dropdown">2020 Festival</button>
                    <ul className="footerSublinkContainer">
                        <li><Link className="footer-link" to="/films/garbage">Garbage</Link></li>
                        <li><Link className="footer-link" to="/theme">Theme</Link></li>
                        <li><Link className="footer-link" to="/schedule">Virtual Film Festival Schedule</Link></li>
                        <li><Link className="footer-link" to="/sponsor">Sponsors</Link></li>
                        <li><Link className="footer-link" to="/team">Team</Link></li>
                        <li><Link className="footer-link" to="/news">News & Stories</Link></li>
                        <li><Link className="footer-link" to="/sfc">Short Film Competition</Link></li>
                    </ul>
                </div>
                <div className="col col-sm-12 col-md-4 col-lg-2">
                    <button className="footer-title footer-dropdown">About</button>
                    <ul className="footerSublinkContainer">
                        <li><Link to="/about" className="footer-link">Mission & History</Link></li>
                        <li><Link to="previous_festivals" className="footer-link">Previous Festivals</Link></li>
                        <li><Link to="/education" className="footer-link">Education</Link></li>
                        <li><Link to="/contact" className="footer-link">Contact</Link></li>     
                    </ul>             
                </div>
                <div className="col col-sm-12 col-md-4 col-lg-2">
                    <button className="footer-title footer-dropdown">Support</button>
                    <ul className="footerSublinkContainer">
                        <li><Link to="/sponsor" className="footer-link">Sponsorship</Link></li>
                        <li><Link to="/ad_opportunities" className="footer-link">Ad Opportunities</Link></li>
                        <li><Link to="/internships" className="footer-link">Get Involved</Link></li>
                        <li><a href="https://cmu.secure.force.com/pmtx/giftselect?id=a41f4000000eIV5,a41f4000000eHw6&appeal=A4700" className="footer-link">Donate</a></li>   
                    </ul>  
                </div>
            </div>
            <p className="footer-subtitle">© 2021 Carnegie Mellon International Film Festival</p>
        </footer>
		);


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