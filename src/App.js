import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';

import Main from 'views/layout/main/Main';
import Home from 'views/pages/home/Home';
import Login from "views/pages/login/Login";

function App() {
  return (
    <Router>
    <div className="App">
        <Main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
        </Main>
      </div>
    </Router>
  );
}

export default App;
