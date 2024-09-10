import { FC } from 'react';
import { Link } from 'react-router-dom';

const CSS: FC = () => {
  return (
      <div className='card'>
          <h2>CSS</h2>
          <ul>
         <li> <Link to="/grid">Grid</Link></li>
          </ul>
    </div>
  )
}

export default CSS