import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello Yura!!! <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {

  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://www.edigitalagency.com.au/wp-content/uploads/Instagram-logo-acrylic-splash.png' />
      </header>
      <nav className='nav'>
        <div>
          <a href='#!'>Profile</a>
        </div>
        <div>
          <a href='#!'>Messages</a>
        </div>
        <div>
          <a href='#!'>News</a>
        </div>
        <div>
          <a href='#!'>Music</a>
        </div>
        <div>
          <a href='#!'>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='http://www.famima.vn/wp-content/uploads/2020/03/baner-web-01-1600x612.png' />
        </div>
        <div>
          <img src='https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png' />
        </div>
        <div>
          My POSTS
          <div>
            New Post
            <div>
              <div>
                post 1
              </div>
              <div>
                post 2
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>

      </div>
    </div>

  );
}





export default App;
