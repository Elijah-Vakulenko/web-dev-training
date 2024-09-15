import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IoLogoCss3 } from "react-icons/io5";
import s from './CSS.module.css'

const CSS: FC = () => {
  return (
    <div className='card'>
<div className={s.title}>
        <IoLogoCss3 className={s.icon} />
            <h2>CSS</h2>
</div>
          <ul>
        <li><Link className='link' to="/grid">Grid</Link></li>
        <li><Link className='link' to="/animations">Animations / Анімації</Link></li>
        <li><Link className='link' to="/shapes">Shapes / Форми</Link></li>
        <li><Link className='link' to="/galleries">Gallery Layouts / Дизайн для галерей</Link></li>
          </ul>
    </div>
  )
}

export default CSS