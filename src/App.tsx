import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Arrays = lazy(() => import('./pages/Arrays/Arrays'));
const Tags = lazy(() => import('./pages/Tags/Tags'));
const Grid = lazy(() => import('./pages/Grid/Grid'));
const Functions = lazy(() => import('./pages/Functions/Functions'));
const Objects = lazy(() => import('./pages/Objects/Objects'));
const Test = lazy(() => import('./pages/Test/Test'));
const Shapes = lazy(() => import('./pages/Shapes/Shapes'));
const Animations = lazy(() => import('./pages/Animations/Animations'));
const Galleries = lazy(() => import('./pages/Galleries/Galleries'));
const Cycles = lazy(() => import('./pages/Cycles/Cycles'));
const BasicStatements = lazy(() => import('./pages/BasicStatements/BasicStatements'));
const BranchStatements = lazy(() => import('./pages/BranchStatements/BranchStatements'));
const Methods = lazy(() => import('./pages/Methods/Methods')) 
function App() {
  return (
    <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
          <Route path="/" element={<HomePage />} />
              <Route path="/test" element={<Test />} />
          
              <Route path="/tags" element={<Tags />} />
          
              <Route path="/grid" element={<Grid />} />
              <Route path="/shapes" element={<Shapes />} />
              <Route path="/animations" element={<Animations />} />
              <Route path="/galleries" element={<Galleries />} />
          
              <Route path="/basic-statements" element={<BasicStatements />} />
              <Route path="/methods" element={<Methods />} />
              <Route path="/functions" element={<Functions />} />
              <Route path="/branch-statements" element={<BranchStatements />} />
              <Route path="/cycles" element={<Cycles />} />
              <Route path="/arrays" element={<Arrays />} />
              <Route path="/objects" element={<Objects />} />
            </Routes>
          </Suspense>
    </div>
  );
}

export default App;
