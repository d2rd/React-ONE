import React from 'react';  //pre-loaded in package.json
import ReactDOM from 'react-dom';  //pre-loaded in package.json

import './index.css';

const movies = [
  {
    id: 1,
    title: 'Lord of the Rings'
  },
{
    id: 1,
    title: 'Hunt for Red October'
  },{
    id: 3,
    title: 'Star Wars'
  },]

function Movie () {
  return <div>Movie Component</div>;
}

// making new component
class MovieList extends React.Component {  // declare a new class
  render() {  // create a render method for each component.  Method should always return some jsx
    return (
      <div className="movie-list">
        <h1>Movies List Component</h1>
        <ul>
          <li>Lord of the Rings</li>
          <li>Harry Potter</li>
          <li>Star Wars</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<GreetGroup />, document.getElementById('root'));

