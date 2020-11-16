import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MovieList from "./components/topmovies.component";
import MovieDetail from "./components/movie-detail.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/movies" className="navbar-brand">
            Movies
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/movies"} className="nav-link">
                Top Movies
              </Link>
            </li>
            <li className="nav-item">
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/movies"]} component={MovieList} />
            <Route path="/movie/:id" component={MovieDetail} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
