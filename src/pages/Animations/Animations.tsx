import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn'; 
import clsx from "clsx";
import s from './Animation.module.css'

const box1 = `.box1:hover {
    transition: 3s ease;
    transform: rotate(360deg);
  }`
const box2 = `.box1:hover {
    transition: 3s ease;
    transform: rotateX(360deg);
  }`
const box3 = `.box1:hover {
    transition: 3s ease;
    transform: scale(1.3);
  }`
const box4 = `.box4:hover {
  transform: translateX(15px);
  /* translateX(15px) - moves object for 15px to the right */
  /* translateX(-15px) - moves object for 15px to the left */
  /* translateY(15px) - moves object for 15px up */
  /* translateY(-15px) - moves object for 15px down */
}`
const box5 = `.box5:hover {
    transition: 3s ease;
    transform: skew(-16deg);
  }`
const box6 = `.box6:hover {
    transition: 3s ease;
    transform: matrix(0,1,1,0,0,0);
  }`

const Animations:React.FC = () => {
  return (
    <div className='container'>
      <GoHomeBtn />
    
    <h2 className={s.title}>Basic hover animations</h2>
    
  <div className={s.flex}>
    <div className='wrapper'>
          <pre>{box1}</pre>
          <div className={clsx(s.box, s.box1)}></div>
    </div>
    <div className='wrapper'>
          <pre>{box2}</pre>
          <div className={clsx(s.box, s.box2)}></div>
    </div>
    <div className='wrapper'>
          <pre>{box3}</pre>
          <div className={clsx(s.box, s.box3)}></div>
    </div>
    <div className='wrapper'>
          <pre>{box4}</pre>
          <div className={clsx(s.box, s.box4)}></div>
    </div>
    <div className='wrapper'>
          <pre>{box5}</pre>
          <div className={clsx(s.box, s.box5)}></div>
    </div>
    <div className='wrapper'>
          <pre>{box6}</pre>
          <div className={clsx(s.box, s.box6)}></div>
  </div>
  </div>
    
    
    
    </div>
  )
}

export default Animations