function FilmArticle(props) {
	var awardsList = props.data.awards.map((award) => {
		return (<li>{award}</li>);
	});
	return (
		<article>
                <div>
                    <h2>About the Film</h2>
                    <div className="reviewer-quote">
                    <blockquote>
                        {props.data.reviewerQuote}
                        <span>{props.data.reviewer}</span>
                    </blockquote>
                    </div>
                    <p>
                        {props.data.aboutFilmDesc}
                    </p>
            </div>

            
            <div>
                <h2>Film Trailer</h2>
                <div className="trailer-container">
                    <iframe width="560" height="315" src={props.data.trailerLink} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div>
                <h2>Awards</h2>
                <ul>
                    {awardsList}
                </ul>
            </div>
            <div style={{overflow: "hidden"}}>
                <h2>About the Director</h2>
                <img src={props.data.directorHeadshotAsset} className="director-headshot" />
                <p>
                    {props.data.aboutDirectorDesc}
                </p>
            </div>
            <div>
                <h2>Additional Material</h2>
                <p>
                <a href={props.data.letterboxdLink} target="_blank"><img src="/assets/icons/letterboxd.svg" className="icon-md" /></a>
                    Check out our <a href={props.data.letterboxdLink} target="_blank">review of the film on Letterboxd</a>!
                </p>
                <p>
                <a href={props.data.spotifyLink} target="_blank"><img src="/assets/icons/spotify-green.png" className="icon-md" /></a>
                    Listen to our <a href={props.data.spotifyLink} target="_blank">Spotify playlist</a> inspired by the film!
                </p>
                <p>
                <a href="https://anchor.fm/cmufilmfestival" target="_blank"><img src="/assets/icons/anchor-logo.png" className="icon-md" /></a>
                    Listen to our <a href="https://anchor.fm/cmufilmfestival" target="_blank">podcast</a> to go behind the scenes with the film's creators.
                </p>
            </div>
            </article>
		);
}

export default FilmArticle;