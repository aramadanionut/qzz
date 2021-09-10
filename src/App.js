import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';

import Main from 'views/layout/main/Main';
import Home from 'views/pages/home/Home';
import Login from "views/pages/login/Login";

function App() {
  return (
    <div className="App">
        <Main>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
          </Router>
        </Main>
      </div>
  );
}

export default App;
