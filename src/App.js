import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MotionConfig } from 'motion/react';

import { Main, ProjectsPage } from './pages'
import { BackToTop, Cursor } from './components'
import RouteScroll, { SECTION_BY_PATH, PROJECT_PATHS } from './utils/RouteScroll'
import FullScreen from './components/FullScreen/FullScreen';
import { LanguageProvider } from './i18n/LanguageContext';

import './App.css'

const SECTION_PATHS = Object.keys(SECTION_BY_PATH)

function App() {
  return (
    // reducedMotion="user" mematikan animasi transform di seluruh situs
    // begitu sistem penggunanya minta gerakan dikurangi. Wipe dan Rise
    // menangani sisanya sendiri.
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <div className="app">
          <Cursor />
          <Router>
            <RouteScroll />
            <FullScreen />
            <Switch>
              {/* Proyek punya halamannya sendiri, jadi harus dicocokkan
                  lebih dulu daripada path beranda. */}
              <Route path={PROJECT_PATHS} exact component={ProjectsPage} />
              {/* Sisanya merender beranda; RouteScroll yang memindahkan
                  posisi ke section yang sesuai. */}
              <Route path={SECTION_PATHS} exact component={Main} />
              <Redirect to="/" />
            </Switch>
          </Router>
          <BackToTop />
        </div>
      </LanguageProvider>
    </MotionConfig>
  );
}

export default App;
