import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import { Component, React } from 'react';
import { compose } from 'redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './Components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';
import { lazy } from 'react';
import { Suspense } from 'react';
const DialogsContainer = lazy(() => import('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('./Components/Profile/ProfileContainer'))
class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    return !this.props.initialized
      ? <Preloader />
      : (<div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?' render={() => {
            return <Suspense fallback={<div>Loading...</div>}>
              <ProfileContainer />
            </Suspense>
          }} />
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/users' render={() => <UsersContainer pageTitle={"Самураи"}/>} />
          <Route path='/login' render={() => <Login />} />
        </div>

      </div>);
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter, connect(mapStateToProps, { initializeApp }))(App);
