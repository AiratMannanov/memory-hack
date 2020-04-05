import React, { Suspense } from 'react';
import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom';

const AddInfoPage = React.lazy(() => import('./components/AddInfoPage'));
const MainPage = React.lazy(() => import('./components/MainPage'));

const Tree = React.lazy(() => import('./components/Tree/Tree'));
const Sidebar = React.lazy(() => import('./components/Sidebar'));
const PersonalInfo = React.lazy(() => import('./components/PersonalInfo'));
const RelativesPage = React.lazy(() => import('./components/RelativesPage'));



function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route path='/relatives/:id'>
            <RelativesPage />
          </Route>
          <Route path='/addinfo'>
            <AddInfoPage />
          </Route>
          <Route path='/tree'>
            <Tree />
          </Route>
          <Route path="/info/:id">
            <PersonalInfo />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
