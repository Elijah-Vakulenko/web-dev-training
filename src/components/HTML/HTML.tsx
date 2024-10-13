import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaHtml5 } from "react-icons/fa";

import s from './HTML.module.css'

const HTML: FC = () => {
  return (
      <div className='card' >
     <div className={s.title}>
        <FaHtml5 className={s.icon} />    
        <h2 id="1" >HTML</h2>
     </div>
          <ul>
         <li> <Link className='link' to="/tags">Rare tags / Рідкісні теги</Link></li>
         <li> <Link className='link' to="/text">Text styles / Текстове оформлення</Link></li>
          </ul>
    </div>
  )
}

export default HTML