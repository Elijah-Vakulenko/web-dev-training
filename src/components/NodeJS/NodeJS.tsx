import { FaNodeJs } from "react-icons/fa";
import s from './NodeJS.module.css'

const NodeJS: React.FC = () => {
  return (
    <div className='card' >
<div className={s.title}>
        <FaNodeJs className={s.icon} />
            <h2 id="6">Node.js</h2>
</div>
          <ul>
            <li>initialization</li>
            <li>Mongo DB</li>
          </ul>
    </div>
  )
}

export default NodeJS