import React from 'react';  //pre-loaded in package.json
import ReactDOM from 'react-dom';  //pre-loaded in package.json

import './index.css';

function GreetGroup(){ // React component
return (
  <div>
    <h1 className = "title">Hello CS7!!</h1>
    <h2>It's Great</h2>
    <Name />
  </div>
);
}
function Name() {
  return <div>Ashlei</div>;
}
ReactDOM.render(<GreetGroup />, document.getElementById('root'));

