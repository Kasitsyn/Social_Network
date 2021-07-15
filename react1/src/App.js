import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import { Route } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
const App = (props) => {
  // debugger
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
      </div>

    </div >
  );
}

export default App;
