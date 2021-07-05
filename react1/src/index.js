import './index.css'
import store from './Redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from 'react-router-dom';



const rerender = (state) => {
    // debugger
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <React.StrictMode>
                    <App/>
                        {/* state={state}
                        store={store}
                        dispatch={store.dispatch.bind(store) */}
                </React.StrictMode>
            </StoreContext.Provider>
        </BrowserRouter>,
        
        document.getElementById('root')
    )
}

rerender(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerender(state)
})

