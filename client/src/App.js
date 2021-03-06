import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
    <Switch>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
    </Switch>
      </div>
    </Router>
  );
}

export default App;
