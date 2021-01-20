function FilmHeader(props) {
	return (
		<div className="film-header" style={{backgroundImage: "url('{props.filmHeaderAsset}');"}}>
                <div className="main-film-info"><h1>{props.filmName}</h1>
                <h3>Directed by {props.director}</h3>
                <h3>{props.specs}</h3></div>
            </div>
		);
}

export default FilmHeader;