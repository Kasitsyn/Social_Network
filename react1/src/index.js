import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state'

// let postData = [
//     { id: 1, message: "Hi, how are you?", likesCount: 0 },
//     { id: 2, message: "It's my first post!", likesCount: 23 }
// ]

// let dialogData = [
//   { id: 1, name: "Алексей" },
//   { id: 2, name: "Олег" },
//   { id: 3, name: "Игнат" },
//   { id: 4, name: "Ольга" }
// ]

// let messageData = [
//   { id: 1, message: "Hi!" },
//   { id: 2, message: "How are you?" },
//   { id: 3, message: "Good luck!!" }
// ]


ReactDOM.render(
  <React.StrictMode>
   
    <App state={state} />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
