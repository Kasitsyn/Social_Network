import './index.css'
import store from './Redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



const rerender = (state) => {
    // debugger
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                store={store}
                dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerender(store.getState())

store.subscribe( () => {
    let state = store.getState()
    rerender(state)
})

