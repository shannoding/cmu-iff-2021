
function FilmHeader(props) {

	//import(`${props.data.filmHeaderAsset}`)
	import("../assets/films/america-street-still.jpg")
		.then(img => {
			return (
		<div className="film-header" style={{ backgroundImage: `url(${img})` }}>
                <div className="main-film-info"><h1>{props.data.filmName}</h1>
                <h3>Directed by {props.data.director}</h3>
                <h3>{props.data.specs}</h3></div>
                <img src={img} />
            </div>
		);

		});

	//let img = import('../assets/films/america-street-still.jpg');

		return (
		<div className="film-header" style={{ backgroundImage: `url(../assets/films/america-street-director.jpg)` }}>
                <div className="main-film-info"><h1>{props.data.filmName}</h1>
                <h3>Directed by {props.data.director}</h3>
                <h3>{props.data.specs}</h3></div>
            </div>
		);


	// return (
	// 	<div className="film-header" style={{ backgroundImage: `url(${props.data.filmHeaderAsset})` }}>
 //                <div className="main-film-info"><h1>{props.data.filmName}</h1>
 //                <h3>Directed by {props.data.director}</h3>
 //                <h3>{props.data.specs}</h3></div>
 //            </div>
	// 	);
}

export default FilmHeader;