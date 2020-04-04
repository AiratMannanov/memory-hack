import React, {Suspense} from 'react';
import './components/Photo/Photo.css'
const PhotoList = React.lazy(() => import('./components/PhotoList/PhotoList'))

function App() {
  return (
    <>
      <Suspense fallback={'loading'}>
        <PhotoList />
      </Suspense>
    </>
  );
}

export default App;
