import React, { Component } from "react";
import MovieDataService from "../services/movie-service";
import { Link } from "react-router-dom";
import { Button,Card, CardGroup } from 'react-bootstrap';

export default class MovieList extends Component{
	constructor(props){
		super(props);
		this.retrieveMovie = this.retrieveMovie.bind(this);
		this.refreshList = this.refreshList.bind(this);
		// movies : []
		this.state = {
	      movies: [],
	      currentMovie: null,
	      currentIndex: -1,
	      searchTitle: "",
	      c:[]
	    };

	}

	componentDidMount() {
    this.retrieveMovie();
  }

  retrieveMovie() {
    MovieDataService.getAll()
      .then(response => {
      	console.log("hey")
        this.c=response.data.results
      	console.log(this.c)
        this.setState({
          movies: this.c
        });
        console.log(response.data.results);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveMovie();
    this.setState({
      currentMovie: null,
      currentIndex: -1
    });
  }

   setActiveMovie(movie, index) {
    this.setState({
      currentMovie: movie,
      currentIndex: index
    });
  }
  render() {
  	const { searchTitle, movies, currentMovie, currentIndex } = this.state;
  	return (
  		<div>
  		<h1>{searchTitle}</h1>
  		<h1>{movies.popularity}</h1>
  		<CardGroup>
            {movies &&
              movies.map((movie, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  
                  key={index}
                >
                <Card style={{ width: '18rem' }}>
				  <Card.Img variant="top" src={"http://image.tmdb.org/t/p/w185/"+movie.poster_path} />
				  <Card.Body>
				    <Card.Title>Overview</Card.Title>
				    <Card.Text>
				      {movie.overview}
				    </Card.Text>
				    
				    <Link
		                to={"/movie/" + movie.id}
		                
		              >
                	See More Detail
              		</Link>
              		
				    	
				  </Card.Body>
				</Card>
                 Popularity {movie.popularity}
                </li>
              ))}
          
          </CardGroup>
          
  		</div>
  		);
  }
}