import axios from "axios";
import React, { Component } from "react";
import Image from 'react-bootstrap/Image'
import {Button} from 'react-bootstrap'

export default class MovieDetail extends Component{

	constructor(props){
		super(props);

		this.state={
			currentMovie:{
				"adult":false,
				"backdrop_path":"",
				"belongs_to_collection":null,
				"budget":0,"genres":[{"id":53,"name":"Thriller"},
				{"id":28,"name":"Action"},{"id":18,"name":"Drama"},
				{"id":80,"name":"Crime"}],
				"homepage":"","id":null,
				"imdb_id":"",
				"original_language":"fr","original_title":"Bronx","overview":"Caught in the crosshairs of police corruption and Marseille’s warring gangs, a loyal cop must protect his squad by taking matters into his own hands.","popularity":2234.266,"poster_path":"/9HT9982bzgN5on1sLRmc1GMn6ZC.jpg","production_companies":[{"id":9,"logo_path":"/nda3dTUYdDrJ6rZqBpYvY865aDv.png","name":"Gaumont","origin_country":"FR"}],"production_countries":[{"iso_3166_1":"FR","name":"France"}],"release_date":"2020-10-30","revenue":0,"runtime":116,"spoken_languages":[{"iso_639_1":"fr","name":"Français"}],"status":"Released","tagline":"","title":"Rogue City","video":false,"vote_average":6.1,"vote_count":184
			}
		}
	}

	componentDidMount() {
    this.getMovie(this.props.match.params.id);
  }
  getMovie(id) {
  	axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=29e521c80dba636ea58bfc8d83baad6f&language=en-US&page=1`)
      .then(response => {
        this.setState({
          currentMovie: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
  	const {currentMovie} = this.state;
  	var background = {
  		backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
  	};
	var textStyle = {
	  position: 'absolute', 
	  top: '50%', 
	  left: '50%'
	};
  	return (

  			<div style={{width: 'auto'}}>
                <Image 
                   responsive 
                  src={"http://image.tmdb.org/t/p/w185/"+currentMovie.backdrop_path} fluid/>
                <h1>{currentMovie.title}</h1>
                Overview
                <p>{currentMovie.overview}</p>
                <p> Movie Popularity {currentMovie.popularity}</p>
                <Button href={currentMovie.homepage}>Link</Button>
            </div>
  		)
  }

}