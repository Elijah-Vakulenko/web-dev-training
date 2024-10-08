import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn'; 
import clsx from "clsx";
import s from './Animation.module.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
    <div className={s.wrapper}>
          <SyntaxHighlighter className={s.code} language="css" style={dracula}>{box1}</SyntaxHighlighter>
          <div className={clsx(s.box, s.box1)}></div>
    </div>
    <div className={s.wrapper}>
           <SyntaxHighlighter className={s.code}language="css" style={dracula}>{box2}</SyntaxHighlighter>
          <div className={clsx(s.box, s.box2)}></div>
    </div>
    <div className={s.wrapper}>
           <SyntaxHighlighter className={s.code}language="css" style={dracula}>{box3}</SyntaxHighlighter>
          <div className={clsx(s.box, s.box3)}></div>
    </div>
    <div className={s.wrapper}>
          <div className={s.code}><SyntaxHighlighter language="css" style={dracula}>{box4}</SyntaxHighlighter>
            <ul>
              <li><code className={s.description}>translateX(15px) - moves object for 15px to the right</code></li>
              <li><code className={s.description}>translateX(-15px) - moves object for 15px to the left</code></li>
              <li><code className={s.description}>translateY(15px) - moves object for 15px up</code></li>
              <li><code className={s.description}>translateY(-15px) - moves object for 15px down</code></li>
            </ul>
          </div>
          <div className={clsx(s.box, s.box4)}></div>
        </div>

    <div className={s.wrapper}>
           <SyntaxHighlighter className={s.code}language="css" style={dracula}>{box5}</SyntaxHighlighter>
          <div className={clsx(s.box, s.box5)}></div>
    </div>
    <div className={s.wrapper}>
           <SyntaxHighlighter className={s.code}language="css" style={dracula}>{box6}</SyntaxHighlighter>
          <div className={clsx(s.box, s.box6)}></div>
  </div>
  </div>
    
    
    
    </div>
  )
}

export default Animations