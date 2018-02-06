import React from 'react';

import Movie from './Movie';

class MovieList extends React.Component {
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

  render() {
    return (
      <div className="movie-list">
        <button onClick={this.changeMessage}>Change Message</button>
        <h1>{this.props.heading}</h1>
        <h2>{this.state.message}</h2>
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