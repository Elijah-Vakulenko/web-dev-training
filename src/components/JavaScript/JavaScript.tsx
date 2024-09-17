import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SiJavascript } from "react-icons/si";
import s from './JavaScript.module.css'

const JavaScript: FC = () => {
  return (
    <div className="card">
<div className={s.title}>
        <SiJavascript className={s.icon} />
        <h2>JavaScript</h2>
</div>
      <ul>
        <li><Link className='link' to="/"></Link></li>
        <li><Link className='link' to="/basic-statements">Basic Statements / Базові інструкції</Link></li>
        <li><Link className='link' to="/methods">Methods / Методи</Link></li>
        <li><Link className='link' to="/functions">Functions / Функції</Link></li>
        <li><Link className='link' to="/branch-statements">Сonditional statements and branching statements / Розгалудження</Link> </li>
        <li><Link className='link' to="/cycles">Cycles / Цикли </Link></li>
        <li><Link className='link' to="/arrays">Arrays / Масиви</Link></li>
        <li><Link className='link' to="/objects">Objects / Об'єкти</Link></li>
      </ul>
    </div>
  );
};

export default JavaScript;