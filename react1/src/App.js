import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
const App = (props) => {
  // debugger
  return (
    <div className='app-wrapper'>
      
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path='/profile' render={() => <Profile />} />
        {/* store={props.store}
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}  */}

        <Route path='/dialogs' render={() => <DialogsContainer />} />
        {/* store={props.store}
            // messagesPage={props.state.messagesPage}
            // dispatch={props.dispatch}  */}


        <Route path='/news' component={Profile} />
        <Route path='/music' component={Profile} />
        <Route path='/settings' component={Profile} />
      </div>

    </div >
  );
}

export default App;
