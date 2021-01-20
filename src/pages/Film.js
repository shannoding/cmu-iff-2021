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
import FilmHeader from "../components/FilmHeader";
import FilmArticle from "../components/FilmArticle";

import films from '../assets/film-data.json';

function getFilmOfId(id) {
	for (const film of films) {
		if (film.id == id) {
			return film;
		}
	}
	return null;
}

function Film(props) {
	let { id } = useParams();
	console.log(films);
	var film = getFilmOfId(id);
	if (film == null) {
		return <Error />;
	}
	return (
		<main>
		<FilmHeader data={film} />
		<FilmArticle data={film} />
		</main>
		);
}

export default Film;