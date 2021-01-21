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
import FilmAside from "../components/FilmAside";

import films from '../assets/film-data.json';

function getFilmOfId(id) {
	return films[id];
}

function Film(props) {
	let { id } = useParams();
	console.log(films);
	let film = getFilmOfId(id);
	if (film == null) {
		return <Error />;
	}
	return (
		<main>
		<FilmHeader data={film} />
		<FilmArticle data={film} />
		<FilmAside data={film.screeningData} filmName={film.filmName} />
		</main>
		);
}

export default Film;