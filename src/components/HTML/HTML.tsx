import { FC } from 'react';
import { Link } from 'react-router-dom';

const HTML: FC = () => {
  return (
      <div className='card' >
          <h2>HTML</h2>
          <ul>
         <li> <Link to="/tags">Rare tags / Рідкісні теги</Link></li>
          </ul>
    </div>
  )
}

export default HTML