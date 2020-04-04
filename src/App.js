import React, { Suspense } from 'react';
import './App.css';


const AddInfoPage = React.lazy(() => import('./components/AddInfoPage/'))

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <AddInfoPage />
      </Suspense>
    </div>
  );
}

export default App;
