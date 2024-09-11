import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Arrays = lazy(() => import('./pages/Arrays/Arrays'));
const Tags = lazy(() => import('./pages/Tags/Tags'));
const Grid = lazy(() => import('./pages/Grid/Grid'));
const Functions = lazy(() => import('./pages/Functions/Functions'));
const Objects = lazy(() => import('./pages/Objects/Objects'));
const Test = lazy(() => import('./pages/Test/Test'));

function App() {
  return (
    <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
          <Route path="/" element={<HomePage />} />
              <Route path="/test" element={<Test />} />
              <Route path="/arrays" element={<Arrays />} />
              <Route path="/tags" element={<Tags />} />
              <Route path="/grid" element={<Grid />} />
              <Route path="/functions" element={<Functions />} />
              <Route path="/objects" element={<Objects />} />
            </Routes>
          </Suspense>
    </div>
  );
}

export default App;
