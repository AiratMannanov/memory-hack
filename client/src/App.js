import React, {Suspense} from 'react';
import '../src/components/Photo/Photo.css'
const PhotoList = React.lazy(() => import('../src/components/PhotoList/PhotoList'))

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
