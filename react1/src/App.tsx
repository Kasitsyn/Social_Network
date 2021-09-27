import './App.css';
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, withRouter, BrowserRouter, Redirect } from 'react-router-dom';
import HeaderContainer from './Components/Header/HeaderContainer';
import {Login} from './Components/Login/Login';
import { connect, Provider } from 'react-redux';
import { Component, ComponentType } from 'react';
import { compose } from 'redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './Components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';
import { lazy } from 'react';
import { Switch } from 'react-router';
import store, { AppStateType } from './Redux/redux-store';
import {UsersPage} from './Components/Users/UsersContainer';

const DialogsContainer = lazy(() => import('./Components/Dialogs/DialogsContainer'))
const PropfilePage = lazy(() => import('./Components/Profile/ProfileContainer'))


const SuspensedDialogs = withSuspense(DialogsContainer)
const SuspensedProfile = withSuspense(PropfilePage)

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
        <Navbar />
        <div className="app-wrapper-content" >
          <Switch>
            <Route exact path='/'
              render={() => <Redirect to={'/profile'} />} />
            <Route path='/profile/:userId?' render={() => <SuspensedProfile/>} />
            <Route path='/dialogs' render={() => <SuspensedDialogs/>} />
            <Route path='/users' render={() => <UsersPage pageTitle={"Самураи"} />} />
            <Route path='/login' render={() => <Login />} />
          </Switch>
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
