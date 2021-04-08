import './App.css'
import React,{lazy, Suspense} from 'react';
import {Skeleton} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NewsComponent from './pages/News/index';
import DetailNewsComponent from './pages/DetailNews/index';
import ContactComponent from './pages/Contact/index';
import RecruitmentComponent from './pages/Recruitment/index';
import AlbumComponent from './pages/Album/index';


const HomeComponent = lazy(() => import('./pages/Home/index'));
const AboutUsComponent = lazy(() => import('./pages/About_us/index'));


function App() {
  return (
    <Router>
      <Suspense
        fallback={<Skeleton active/>}
      >
        <Switch>
          <Route path="/home">
              <HomeComponent/>
          </Route>
          <Route path="/about-us">
              <AboutUsComponent/>
          </Route>
          <Route path="/news" exact component={NewsComponent}></Route>
          <Route path="/news/:id" exact component={DetailNewsComponent}></Route>
          <Route path="/contact" exact component={ContactComponent}></Route>
          <Route path="/recruitment" exact component={RecruitmentComponent}></Route>
          <Route path="/album" exact component={AlbumComponent}></Route>
          <Route exact path="/">
              <HomeComponent/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
