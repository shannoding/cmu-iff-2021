function FilmAside(props) {
	return (
		<div className="film-header" style={{ backgroundImage: `url(${props.data.filmHeaderAsset})` }}>
                <div className="main-film-info"><h1>{props.data.filmName}</h1>
                <h3>Directed by {props.data.director}</h3>
                <h3>{props.data.specs}</h3></div>
            </div>
		);
}

export default FilmAside;