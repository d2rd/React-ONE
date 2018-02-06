import React from 'react';

import Movie from './Movie';

class MovieList extends React.Component {
  nextId = 4;
  state = {
    movies: [
      {
        id: 1,
        title: 'The Lord of The Rings',
      },
      {
        id: 2,
        title: 'The Hobbit',
      },
      {
        id: 3,
        title: 'Sta Wars',
      },
    ],
    message: 'old message',
  };

  changeMessage = () => {
    this.setState({ message: 'new Message' });
  };

  getNextId = () =>{ //iterates id
    return this.nextId++;
  }

handleSubmit(event) {
  event.preventDefault();
  // console.log('input value', event.target.value);
  const newMovie = {
    id: this.getNextId(), 
    title: this.state.movieTitle,
  };
 //const existingMoview =[...movies]; // This may be 'rest' operator instead of spread
  
  // research 'spread' operator and 'rest' operator
  const newMovies = [...this.state.movies, newMovie]; //PREFERRED SYNTAX uses '...' spread operator
  // console.log('newMovies',newMovies);
// console.log('input value', event.target.value)
// console.log('state value', this.state.movieTitle)
  // this.setState({ movies: newMovies});
   this.setState({ movieTitle: event.target.value}); 
  }
removeMovie = id => {
  const newMovies = this.state.movies.filter(movie =>
  return movie.id !== id; 
});
this.setState({ movies: NewMovies });
};
  render() {
    return (
      <div className="movie-list">
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title: </label>
        {<div>{this.state.msg}</div>
        <button onClick={() => {this.setState({msg: 'it shows'})}}>Go</button>
        <h1>{this.props.heading}</h1>
        <h2>{this.state.message}</h2>}
        </form>
        <ul>
          {this.state.movies.map(movie => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </ul>
      </div>
    );
  }
}

export default MovieList;