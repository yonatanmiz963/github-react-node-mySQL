import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { CommitPage } from './views/CommitPage/CommitPage';
import { HomePage } from './views/HomePage/HomePage';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
      <AppHeader />
        <Switch>
          <Route component={CommitPage} path="/commit" />
          <Route component={HomePage} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
