import React, { Suspense } from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import MyComponent from './components/Tree/Tree';


const AddInfoPage = React.lazy(() => import('./components/AddInfoPage/'))

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Suspense fallback="Loading...">
            <AddInfoPage />
          </Suspense>
        </Route>
      </Switch>

      {/* <MyComponent /> */}
    </div>
  );
}

export default App;
