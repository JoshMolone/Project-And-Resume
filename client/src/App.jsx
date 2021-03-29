import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import Login from './views/Login';
// import Preferences from './components/Preferences'
// import Create from './views/Create';
// import Axios from 'axios';

function App() {
  return (
    <div>
      <h4>Material in all headers, such as site logo or application banner, navbar maybe.</h4>
      <Router>
          <Main path='/user/:id/dashboard'/>
          <Login path='/'/>
          {/* <Preferences path='/user/:id/preferences'/> */}
          {/* <Create path='/new'/> */}
      </Router>
    </div>
  );
}

export default App;
