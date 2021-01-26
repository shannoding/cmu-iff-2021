import parse from 'html-react-parser';

function getAdditionalMaterials(additionalObj) {
	// additionalObj is the additional materials array
	let addMatList = [];
	for (const add in additionalObj) {
		let link = additionalObj[add];
		if (link == null) {
			continue;
		}
		switch (add) {
			case "letterboxdLink":
				addMatList.push(<p key={add}>
	                <a href={link} target="_blank"><img src="/assets/icons/letterboxd.svg" className="icon-md" /></a>
	                    Check out our <a href={link} target="_blank">review of the film on Letterboxd</a>!
	                </p>);
				break;
			case "spotifyLink":
				addMatList.push(<p key={add}>
                <a href={link} target="_blank"><img src="/assets/icons/spotify-green.png" className="icon-md" /></a>
                    Listen to our <a href={link} target="_blank">Spotify playlist</a> inspired by the film!
                </p>);
                break;
             case "anchorLink":
             	addMatList.push(<p key={add}>
                <a href="https://anchor.fm/cmufilmfestival" target="_blank"><img src="/assets/icons/anchor-logo.png" className="icon-md" /></a>
                    Listen to our <a href="https://anchor.fm/cmufilmfestival" target="_blank">podcast</a> to go behind the scenes with the film's creators.
                </p>);
                break;
		}
	}
	return addMatList;
}

function getReviewerQuote(quote, reviewer) {
	if (quote == null) {
		return "";
	}
	if (reviewer == null) {
		return <div className="reviewer-quote"><blockquote>{parse(quote)}</blockquote></div>;
	}
	return (<div className="reviewer-quote">
		<blockquote>
            {parse(quote)}
            <span>{parse(reviewer)}</span>
    </blockquote></div>
                    );

}

function FilmArticle(props) {
	let awardsList = props.data.awards.map((award, index) => {
		return (<li key={index}>{parse(award)}</li>);
	});

	let addMatList = getAdditionalMaterials(props.data.additionalMaterial);

	let reviewerQuote = getReviewerQuote(props.data.reviewerQuote, props.data.reviewer);

	return (
		<article>
                <div>
                    <h2>About the Film</h2>
                    {reviewerQuote}
                    <p>
                        {parse(props.data.aboutFilmDesc)}
                    </p>
            </div>

            <div>
                <h2>Film Trailer</h2>
                <div className="trailer-container">
                    <iframe width="560" height="315" src={props.data.trailerLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                    {parse(props.data.aboutDirectorDesc)}
                </p>
            </div>
            <div>
                <h2>Additional Material</h2>
                {addMatList}
            </div>
            </article>
		);
}

export default FilmArticle;