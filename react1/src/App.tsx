import './App.css';
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect, Provider } from 'react-redux';
import { Component, ComponentType } from 'react';
import { compose } from 'redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './Components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';
import { lazy } from 'react';
import { Suspense } from 'react';
import store, { AppStateType } from './Redux/redux-store';
const DialogsContainer = lazy(() => import('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('./Components/Profile/ProfileContainer'))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void 
}

class App extends Component<MapPropsType & DispatchPropsType> {
  catchALLUnandeledError = (e: PromiseRejectionEvent) => {
    alert("Some error occured")
  }

  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchALLUnandeledError)
  }

  componentWillMount() {
    window.removeEventListener('unhandledrejection', this.catchALLUnandeledError)
  }

  render() {
    return !this.props.initialized
      ? <Preloader />
      : (<div className='app-wrapper' >
        <HeaderContainer />
        < Navbar />
        <div className="app-wrapper-content" >
          <Route path='/profile/:userId?' render={() => {
            return <Suspense fallback={
              <div>Loading...</div>}>
              < ProfileContainer />
            </Suspense>
          }
          } />
          < Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/users' render={() => <UsersContainer pageTitle={"Самураи"} />} />
          <Route path='/login' render={() => <Login />} />
        </div>

      </div>);
  }

}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

let AppContainer = compose<ComponentType>(
  withRouter, connect(mapStateToProps, { initializeApp }))(App);  

const SamuraiJSApp: React.FC = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp
