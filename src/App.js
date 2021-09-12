import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';

import Main from 'views/layout/main/Main';
import Home from 'views/pages/home/Home';
import Login from "views/pages/login/Login";
import QuizBuilder from "views/pages/quiz-builder/QuizBuilder";
import QuizWizard from "views/pages/quiz-wizard/QuizWizard";
import QuizResults from "views/pages/quiz-results/QuizResults";

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
              <Route exact path="/builder">
                <QuizBuilder />
              </Route>
              <Route exact path="/quiz">
                <QuizWizard />
              </Route>
              <Route exact path="/results">
                <QuizResults />
              </Route>
            </Switch>
        </Main>
      </div>
    </Router>
  );
}

export default App;
