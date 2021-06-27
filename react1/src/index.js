import './index.css'
import state, { subscriber } from './Redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updateNewPostText } from './Redux/state';


const rerender = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={props}
                addPost={addPost}
                updateNewPostText={updateNewPostText} />
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerender(state)

subscriber(rerender)

