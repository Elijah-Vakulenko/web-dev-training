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
        <li> <Link to="/grid">Grid</Link></li>
        <li>Animations / Анімації </li>
        <li>Shapes / Форми</li>
        <li>Gallery Layouts / Дизайн для галерей</li>
          </ul>
    </div>
  )
}

export default CSS