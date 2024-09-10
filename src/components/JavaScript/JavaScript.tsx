// JavaScript.tsx
import { lazy, FC, Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

const Arrays = lazy(() => import('../../pages/Arrays'));

const JavaScript: FC = () => {
  return (
    <div className="card">
      <h2>JavaScript</h2>
      <ul>
        <li>
          <Link to="/arrays">Go to Arrays</Link>
        </li>
      </ul>
      
      {/* Рендеринг компонента Arrays внутри JavaScript */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="arrays" element={<Arrays />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default JavaScript;
