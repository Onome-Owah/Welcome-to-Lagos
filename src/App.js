import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Main from './Main';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Main/>
          </Route>
          <Route path='/About'>
            <About/>
          </Route>
          <Route path='/Contact'>
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
