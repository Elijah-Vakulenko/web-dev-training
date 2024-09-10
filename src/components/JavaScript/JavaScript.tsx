import { FC } from 'react';
import { Link } from 'react-router-dom';

const JavaScript: FC = () => {
  return (
    <div className="card">
      <h2>JavaScript</h2>
      <ul>
        <li>
          <Link to="/arrays">Arrays</Link>
        </li>
      </ul>
    </div>
  );
};

export default JavaScript;