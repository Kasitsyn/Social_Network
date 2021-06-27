import ReactDOM from 'react-dom'
import React from 'react';
import App from './App';
import { addPost } from './Redux/state';

const rerender = (props) => {
    ReactDOM.render(
      <React.StrictMode>
  
        <App state={props} addPost={addPost} />
  
      </React.StrictMode>,
      document.getElementById('root')
  
    )
  }

  export default rerender