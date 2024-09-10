import React from 'react';
import { Link } from 'react-router-dom';

const GoHomeBtn: React.FC = () => {
  return (
    <div >
      <Link to="/">
        <button className='btn'>Go Home</button>
      </Link>
    </div>
  );
}

export default GoHomeBtn;
