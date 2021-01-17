import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Film(props) {
	let { id } = useParams();
	return (<p>Film {id}.</p>);
}

export default Film;