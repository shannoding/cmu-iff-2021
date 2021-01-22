import parse from 'html-react-parser';

function getSponsorsList(sponsors) {
	let sponsorsList = sponsors.map((sponsor) => {
		return (<div className="sponsors" key={sponsor.name}>
                    <div>
                        <a href={sponsor.link} target="_blank">
                        <img src={sponsor.logo} alt={sponsor.name} />
                        </a>
                    </div>
                    <i className="fas fa-external-link-alt"></i>
                </div>);
	});
	return sponsorsList;
}

function FilmAside(props) {
	let registrationLink = "";
	if (props.data.registrationOpen && props.data.registrationLink) {
		registrationLink = (<p><a href={props.data.registrationLink} target="_blank">Register here.</a></p>);
	}
	let ticketsClosed = "";
	if (props.data.ticketsClosed) {
		ticketsClosed = (<p className="emText">Tickets for the event are no longer on sale.</p>);
	}
	let sponsorsList = getSponsorsList(props.data.sponsors);
	return (
		<aside>
            <div id="screenings-side">
                <h2>Screenings</h2>
                <div className="screening">
                    <h4>{props.data.dates}</h4>
                    <div>
                        <p>Virtual Screening!</p>
                        <p>{parse(props.data.redeemCodeDesc)}</p>
                    <p className="tinyNoteText">{parse(props.data.tinyRegistrationDesc)}</p>
                    <p className="emText">Registration for the film will open on {props.data.registrationOpenDate}.</p>
                    {registrationLink}
                    {ticketsClosed}
                    
                    </div>
                    <div>
                        <p>
                            + On <b>{props.data.almostliketrtTimes.date}</b>, CMU IFF will be emulating our in-person festival event by hosting a screening followed by a live discussion:
                        </p>
                        <p>
                            @ <b>{props.data.almostliketrtTimes.screeningTime}</b> - View an online screening of "{props.filmName}"
                            </p>
                            <p className="emText">Registration for the film will open on {props.data.registrationOpenDate}.</p>
                            {registrationLink}
                        <p>
                            @ <b>{props.data.almostliketrtTimes.discussionTime}</b> - {parse(props.data.discussionDesc)}
                        </p>
                        <p>To join the discussion, <a href={props.data.discussionLink} target="_blank"> register in advance here</a>. Spots are limited.</p>
                    </div>


                </div>
            </div>
            <div id="sponsors_side">
                <h2>Event Sponsors</h2>
                <p>{props.data.sponsorsDesc}</p>
                {sponsorsList}
            </div>
        </aside>
		);
}

export default FilmAside;

/*
<aside>
    <div id="screenings-side">
        <h2>Screenings</h2>
        <div className="screening">
            <h4>Saturday, January 23 - Friday, January 29</h4>
            <div>
                <p>Virtual Screening!</p>
                <p>
                    The first 50 people to register using the code <b>CMUIFF</b> will watch for free!
                </p>
            <p style="margin-bottom: 12px; font-style: italic;font-size:1em;">You will need to register or log in to Row House's theater website to redeem/purchase tickets and watch the film.</p>
            <p style="font-weight:bold;color: #DA3837;">Registration for the film will open on January 20.</p>
            <!-- <p><a href="https://rowhouse.vhx.tv/products/garbage-2019" target="_blank">Register here.</a></p> -->
             
               
            <!-- <p style="font-weight:bold;color: #DA3837;">Tickets for the event are no longer on sale.</p> -->
            </div>
            <div>
                <p>
                    + On <b>Thursday, January 28th</b>, CMU IFF will be emulating our in-person festival event by hosting a screening followed by a live discussion:
                </p>
                <p>
                    @ <b>5pm</b> - View an online screening of "Corpus Christi"
                    </p>
                    <p style="font-weight:bold;color: #DA3837;">Registration for the film will open on January 20.</p>
                    <!-- <p><a href="https://rowhouse.vhx.tv/products/garbage-2019" target="_blank">Register here.</a></p> -->
                <p>
                    @ <b>7pm</b> - The festival will host a FREE live discussion with Polish director Jan Komasa, director of the award-nominated film "Corpus Christi". The discussion will be moderated by Dr. Patricia Donohue, Adjunct Professor of Psychology at Chatham University, as well as Jolanta Lion, Assistant Director of CMU's Humanities Center and Director of the CMU International Film Festival. The discussion will be conducted virtually via Zoom.
                </p>
                <p>
                        To join the discussion, <a href="https://cmu.zoom.us/meeting/register/tJMvduyhqTgtE9QFy0GEIL99hKQCyVibK4T8" target="_blank">
                        register in advance here</a>. Spots are limited.
                    </p>
            </div>


        </div>
    </div>
    <div id="sponsors_side">
        <h2>Event Sponsors</h2>
        <p>This event is organized in conjunction with Row House Cinema. The Corpus Christi screening and event are supported by The Humanities Scholars Program, CMU's Graduate Student Assembly, and the Polish Cultural Institute New York.</p>
        <div className="sponsors">
            <div>
                <a href="https://www.cmu.edu/dietrich/hsp/" target="_blank">
                <img src="../Assets/Sponsor Logos/2 Silver Reel/CMU Humanities Scholars  Program.png">
                </a>
            </div>
            <i className="fas fa-external-link-alt"></i>
        </div>
        <div className="sponsors">
            <div>
                <a href="https://www.cmu.edu/stugov/gsa/" target="_blank">
                <img src="../Assets/Sponsor%20Logos/3%20Festival%20Producers/CMU%20GSA.png">
                </a>
            </div>
            <i className="fas fa-external-link-alt"></i>
        </div>
        <div className="sponsors">
            <div>
                <a href="https://instytutpolski.pl/newyork/" target="_blank">
                <img src="../Assets/Sponsor Logos/Virtual-Sponsors/polish cultural institute ny.png">
                </a>
            </div>
            <i className="fas fa-external-link-alt"></i>
        </div>
        <div className="sponsors">
            <div>
                <a href="https://rowhousecinema.com/" target="_blank">
                <img src="../Assets/Sponsor Logos/10 Venue Sponsors/Row House.png">
                </a>
            </div>
            <i className="fas fa-external-link-alt"></i>
        </div>
    </div>
</aside>*/