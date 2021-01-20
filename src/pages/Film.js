import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Error from "./Error";

import films from '../assets/film-data.json';

function getFilmOfId(id) {
	films.forEach(film => {
		if (film.id == id) {
			return film;
		}
	});
	return null;
}

function Film(props) {
	let { id } = useParams();
	console.log(films);
	var film = getFilmOfId(id);
	if (film == null) {
		return <Error />;
	}
	return (<p>Film {id}.</p>);
}

export default Film;