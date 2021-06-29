import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
const App = (props) => {
  
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile'
            render={() => <Profile state={props.state.profilePage} addPost={props.addPost} />} />
          <Route path='/dialogs'
            render={() => <Dialogs state={props.state.messagesPage}/>} />
          <Route path='/news' component={Profile} />
          <Route path='/music' component={Profile} />
          <Route path='/settings' component={Profile} />
        </div>
      </BrowserRouter>
    </div >
  );
}





export default App;
