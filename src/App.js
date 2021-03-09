import './App.css';
import CreateUser from './CreateUser';
import Users from './Users';
import Contact from './Contact';
import About from './About';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/users">User list</Link>
        <Link to="/createuser">Create User</Link>
        {/* <h1>Hello World!</h1>
        <Contact />
        <CreateUser />
        <Users /> */}
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/contact"> <Contact /></Route>
          <Route path="/users"><Users /></Route>
          <Route path="/createuser"><CreateUser /></Route>
          <Route exact path="/">Home</Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
