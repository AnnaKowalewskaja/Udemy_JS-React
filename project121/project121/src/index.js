import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//const elem = <h2>Hello World</h2>;
const text = 'hello world';
const elem =(
  <div>
    <h2>Text+{text}</h2>
    <input type='text'/>
    <button className='button'/>
    <h2>Hello</h2>
    
  </div>
)

// const elem = React.createElement('h2', {
//   classname: 'greetngs'
// }, 'hello world');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);


reportWebVitals();