// App.tsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Arrays from './pages/Arrays';

function App() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/html">HTML</Link>
          </li>
          <li>
            <Link to="/css">CSS</Link>
          </li>
          <li>
            <Link to="/javascript">JavaScript</Link>
          </li>
          <li>
            <Link to="/reactjs">ReactJS</Link>
          </li>
          <li>
            <Link to="/arrays">Arrays</Link>
          </li>
        </ul>
      </nav>

      <div className="wrapper">
        <Routes>
          <Route path="/html" element={<HTML />} />
          <Route path="/css" element={<CSS />} />
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/reactjs" element={<ReactJS />} />
          <Route path="/arrays" element={<Arrays />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
