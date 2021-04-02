import './App.css'
import React,{lazy, Suspense} from 'react';
import {Skeleton} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



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
          <Route exact path="/">
              <HomeComponent/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
