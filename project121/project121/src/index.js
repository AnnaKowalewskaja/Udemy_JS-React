import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContainerExample from './BootstrapTest';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


//const elem = <h2>Hello World</h2>;
// const text = 'hello world';
// const elem =(
//   <div>
//     <h2>Text+{text}</h2>
//     <input type='text'/>
//     <button className='button'/>
//     <h2>Hello</h2>
    
//   </div>
// )

// const elem = React.createElement('h2', {
//   classname: 'greetngs'
// }, 'hello world');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
    <ContainerExample/>
  </StrictMode>
  
);


