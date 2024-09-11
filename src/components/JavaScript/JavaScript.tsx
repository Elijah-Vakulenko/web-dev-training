import { FC } from 'react';
import { Link } from 'react-router-dom';

const JavaScript: FC = () => {
  return (
    <div className="card">
      <h2>JavaScript</h2>
      <ul>
        <li><Link to="/functions">Functions / Функції</Link></li>
        <li><Link to="/arrays">Arrays / Масиви</Link></li>
        <li><Link to="/objects">Objects / Об'єкти</Link></li>
      </ul>
    </div>
  );
};

export default JavaScript;