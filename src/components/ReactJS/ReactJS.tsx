import { FaReact } from "react-icons/fa";
import s from './ReactJs.module.css'

const ReactJS = () => {
  return (
    <div className='card' >
      <div className={s.title}>
        <FaReact className={s.icon} />
        <h2>React.js</h2>
      </div>
      <ul>
        <li>Components</li>
        <li>Props</li>
        <li>useState</li>
        <li>Formik</li>
        <li>Redux</li>
      </ul>
    </div>
  )
}

export default ReactJS