import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DNA } from 'react-loader-spinner';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Arrays = lazy(() => import('./pages/Arrays/Arrays'));
const Tags = lazy(() => import('./pages/Tags/Tags'));
const Text = lazy(() => import('./pages/Text/Text'));
const Grid = lazy(() => import('./pages/Grid/Grid'));
const Img = lazy(() => import('./pages/Img/Img'));
const Functions = lazy(() => import('./pages/Functions/Functions'));
const Objects = lazy(() => import('./pages/Objects/Objects'));
const Calc = lazy(() => import('./pages/Calc/Calc'));
const Test = lazy(() => import('./pages/Test/Test'));
const Shapes = lazy(() => import('./pages/Shapes/Shapes'));
const Animations = lazy(() => import('./pages/Animations/Animations'));
const Galleries = lazy(() => import('./pages/Galleries/Galleries'));
const Cycles = lazy(() => import('./pages/Cycles/Cycles'));
const BasicStatements = lazy(() => import('./pages/BasicStatements/BasicStatements'));
const BranchStatements = lazy(() => import('./pages/BranchStatements/BranchStatements'));
const Methods = lazy(() => import('./pages/Methods/Methods'));
const Operators = lazy(() => import('./pages/Operators/Operators'));

const NotFound = () => <h2>404 - Page Not Found</h2>; 

function App() {
  return (
    <div>
      <div className="logo">Web Dev Training...</div>
      <Suspense fallback={<div className='loader'><DNA visible={true} height="350" width="350" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" /></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/text" element={<Text />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/img" element={<Img />} />
          <Route path="/shapes" element={<Shapes />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/basic-statements" element={<BasicStatements />} />
          <Route path="/methods" element={<Methods />} />
          <Route path="/operators" element={<Operators />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/branch-statements" element={<BranchStatements />} />
          <Route path="/cycles" element={<Cycles />} />
          <Route path="/arrays" element={<Arrays />} />
          <Route path="/objects" element={<Objects />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
