import React, { Suspense } from 'react';
import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom';

const AddInfoPage = React.lazy(() => import('./components/AddInfoPage/'));
const Tree = React.lazy(() => import('./components/Tree/Tree'));

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <Switch>
          <Route exact path='/'>
              <AddInfoPage />
          </Route>
          <Route path='/tree'>
            <Tree />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
