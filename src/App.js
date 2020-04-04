import React, { Suspense } from 'react';
import './App.css';
import MyComponent from './components/Tree/Tree';


const AddInfoPage = React.lazy(() => import('./components/AddInfoPage/'))

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <AddInfoPage />
      </Suspense>
      <MyComponent />
    </div>
  );
}

export default App;
