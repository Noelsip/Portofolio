import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MotionConfig } from 'motion/react';

import { Main } from './pages'
import { BackToTop, Cursor } from './components'
import RouteScroll, { SECTION_BY_PATH } from './utils/RouteScroll'
import FullScreen from './components/FullScreen/FullScreen';

import './App.css'

const SECTION_PATHS = Object.keys(SECTION_BY_PATH)

function App() {
  return (
    // reducedMotion="user" mematikan animasi transform di seluruh situs
    // begitu sistem penggunanya minta gerakan dikurangi. Wipe menangani
    // clip-path-nya sendiri, karena itu tidak termasuk yang dimatikan di sini.
    <MotionConfig reducedMotion="user">
      <div className="app">
        <Cursor />
        <Router>
          <RouteScroll />
          <FullScreen />
          <Switch>
            {/* Semua path merender halaman yang sama; RouteScroll yang
                memindahkan posisi ke section yang sesuai. */}
            <Route path={SECTION_PATHS} exact component={Main} />
            <Redirect to="/" />
          </Switch>
        </Router>
        <BackToTop />
      </div>
    </MotionConfig>
  );
}

export default App;
