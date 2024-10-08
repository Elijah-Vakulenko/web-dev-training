import { SiTypescript } from "react-icons/si";
import s from './TypeScript.module.css'

const TypeScript: React.FC = () => {
  return (
    <div className='card' >
<div className={s.title}>
        <SiTypescript className={s.icon} />
            <h2 id="5">TypeScript</h2>
</div>
          <ul>
            <li>TypeScript for React / Типізація для Реакту</li>
          </ul>
    </div>
  )
}

export default TypeScript