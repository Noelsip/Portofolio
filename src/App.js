import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Main } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'
import FullScreen from './components/FullScreen/FullScreen';

import './App.css'

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <FullScreen />
        <Switch>
          <Route path="/" exact component={Main} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
