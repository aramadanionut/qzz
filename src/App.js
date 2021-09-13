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
import Leaderboard from "views/pages/leaderboard/Leaderboard";
import useWindowSize from "hooks/useWindowSize";
import classNames from "classnames";

function App() {
    const windowSize = useWindowSize();
    
    const appClasses = classNames({
        App: true,
        'App--mobile': windowSize.isMobile,
    });

    return (
        <Router>
            <div className={ appClasses }>
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
                    <Route exact path="/leaderboard">
                        <Leaderboard />
                    </Route>
                </Switch>
            </Main>
            </div>
        </Router>
        );
    }
    
    export default App;
    