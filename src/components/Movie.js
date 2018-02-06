import React from 'react';

function Movie(props) {
  return (
    <li>
      <button 
        onClick={() => {
          props.deleteMovie(props.movie.id);
        }}
      >
        Delete
      </button>{' '}
      {props.movie.title}
    </li>
      
  )};
  

function Movie(props) {
  return <li>{props.movie.title}</li>;
}

export default Movie;