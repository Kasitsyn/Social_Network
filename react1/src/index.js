import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state'
<<<<<<< HEAD
import {addPost} from './Redux/state'

addPost('asdasd')


ReactDOM.render(
  <React.StrictMode>
   
    <App state={state} addPost={addPost}/>
    
=======
import { addPost } from './Redux/state'

ReactDOM.render(
  <React.StrictMode>

    <App state={state} addPost={addPost} />

>>>>>>> 3036694de446d207ca635a69e9a3a47e5964468c
  </React.StrictMode>,
  document.getElementById('root')
  
);

reportWebVitals();
