import React,{lazy, Suspense} from 'react';
import {Skeleton} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'


const HomeComponent = lazy(() => import('./pages/home/index'));

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
          <Route exact path="/">
              <HomeComponent/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
