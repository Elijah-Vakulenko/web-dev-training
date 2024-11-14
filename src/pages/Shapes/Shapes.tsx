import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn'; 
import s from './Shapes.module.css'; // Импортируем стили
import clsx from "clsx";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Shapes: React.FC = () => {
  // Определяем CSS-код в виде строки, чтобы показать его в текстовом формате
  const triangleCSS = `.triangle {
      width: 300px;
      height: 300px;
      background: green;
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
    }
  `;

  const octagonCSS = `.octagon {
      width: 300px;
      height: 300px;
      background: pink;
      clip-path: polygon(
        16.6% 16.6%, 50% 0, 83.3% 16.6%, 100% 50%, 
        83.3% 83.3%, 50% 100%, 16.6% 83.3%, 0 50%
      );
    }
  `;

  const ovalCSS = `.oval {
      width: 300px;
      height: 400px;
      background: green;
      border-radius: 100% / 120% 120% 75% 75%;
    }
  `;

    const sparkCSS = `.spark{
    width: 200px;
    aspect-ratio: 1;
    background: purple;
    clip-path: polygon(40% 40%, 50% 0, 60% 40%,
    100% 50%, 60% 60%, 50% 100%, 40% 60%, 0 50%);
    }
  `;

  const star = `.star{
  background-color: var(--beige);
  width: 200px;
  height: 200px;
  clip-path: polygon(50% 0%, 61% 35%,
   98% 35%, 68% 57%,
   79% 91%, 50% 70%,
   21% 91%, 32% 57%,
   2% 35%, 39% 35%);
}`
  
  const trapezoid = `.trapezoid{
  background-color: var(--main-bg-color);
  width: 200px;
  height: 200px;
clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%);
}

.trapezoid2{
  width: 200px;
  height: 200px;
  background-color: var(--purple);
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
}
 `
const rhombus =`.rhombus{
  background-color: var(--main);
  width: 200px;
  height: 200px;
clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}`
  const frame = `.frame{
  width: 200px;
  height: 200px;
  background-color: var(--card);
  clip-path: polygon(0% 0%, 0% 100%, 25% 100%,
  25% 25%, 75% 25%, 75% 75%, 25% 75%,
  25% 100%, 100% 100%, 100% 0%);
}`
  const halfCircle = `.halfcircle{
  background-color: orangered;
  width: 200px;
  height: 200px;
clip-path: ellipse(50% 50% at 50% 100%);
}`
  const pentagon=`.pentagon{
  width: 150px;
  height: 150px;
  background-color: silver;
  clip-path: polygon(50% 0%, 100% 38%, 
  82% 100%, 18% 100%, 0% 38%);
}`
  const starDavid=`.starDavid{
  width: 200px;
  height: 200px;
  background-color: lightblue;
clip-path: polygon(0% 75%, 0% 75%, 35% 75%, 35% 75%, 
50% 100%, 50% 100%, 67% 75%, 67% 75%, 
100% 75%, 100% 75%, 84% 50%, 84% 50%, 
100% 25%, 100% 25%, 67% 25%, 67% 25%, 
50% 0%, 50% 0%, 35% 25%, 35% 25%, 
0% 25%, 0% 25%, 17% 50%, 17% 50%);
}`

  const chevron = `
.leftChevron{
  background-color: tomato;
  width: 200px;
  height: 200px;
  clip-path: polygon(100% 0%, 75% 50%,
    100% 100%, 25% 100%, 0% 50%, 25% 0%);
  }

.rightChevron{
  background-color: tomato;
  width: 200px;
  height: 200px;
  clip-path: polygon(75% 0%, 100% 50%,
    75% 100%, 0% 100%, 25% 50%, 0% 0%);
  }
  `  
  
  const message = `
.message{
background-color: tomato;
width: 200px;
height: 200px;
clip-path: polygon(0% 0%, 100% 0%, 100% 75%,
75% 75%, 75% 100%, 50% 75%, 0% 75%);
}
`
  
  const cross = `
  .closeCross{
background-color: tomato;
width: 200px;
height: 200px;
clip-path: polygon(20% 0%, 0% 20%, 30% 50%,
  0% 80%, 20% 100%, 50% 70%, 80% 100%,
  100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
}
  `

  return (
    <div className={clsx(s.container, s.gap)}>
      <GoHomeBtn />

      <div className='wrapper'>
          <div className='input'>
            <h3>Spark CSS</h3>
            <SyntaxHighlighter language="css" style={dracula}>{sparkCSS}</SyntaxHighlighter>
          </div>
          <div className={s.output}>
              <div className={s.spark}></div>
          </div>
      </div>
      <div className='wrapper'>
          <div className='input'>
            <h3>Triangle CSS</h3>
            <SyntaxHighlighter className={s.code}language="css" style={dracula}>{triangleCSS}</SyntaxHighlighter>
          </div>
          <div className={s.output}>
              <div className={s.triangle}></div>
          </div>
      </div>
      <div className='wrapper'>
          <div className='input'>
            <h3>Octagon CSS</h3>
            <SyntaxHighlighter className={s.code}language="css" style={dracula}>{octagonCSS}</SyntaxHighlighter>
          </div>
          <div className={s.output}>
              <div className={s.octagon}></div>
          </div>
      </div>
      <div className='wrapper'>
          <div className='input'>
            <h3>Oval CSS</h3>
          <SyntaxHighlighter className={s.code} language="css" style={dracula}>{ovalCSS}</SyntaxHighlighter>
          </div>
          <div className={s.output}>
              <div className={s.oval}></div>
          </div>
      </div>

      <div className='wrapper'>
          <div className='input'>
            <h3>Star CSS</h3>
            <SyntaxHighlighter className={s.code}language="css" style={dracula}>{star}</SyntaxHighlighter>
          </div>
          <div className={s.output}>
              <div className={s.star}></div>
          </div>
      </div>
    
      <div className='wrapper'>
          <div className='input'>
            <h3>Trapezoid CSS</h3>
            <SyntaxHighlighter className={s.code}language="css" style={dracula}>{trapezoid}</SyntaxHighlighter>
          </div>
          <div className={s.output}>
              <div className={s.trapezoid}></div>
              <div className={s.trapezoid2}></div>
        </div>
      </div>
      <div className='wrapper'>
          <div className='input'>
            <h3>Rhombus CSS</h3>
            <SyntaxHighlighter className={s.code}language="css" style={dracula}>{rhombus}</SyntaxHighlighter>
          </div>
          <div className={s.output}>
              <div className={s.rhombus}></div>
          </div>
      </div>
      <div className='wrapper'>
          <div className='input'>
            <h3>Frame CSS</h3>
            <SyntaxHighlighter className={s.code}language="css" style={dracula}>{frame}</SyntaxHighlighter>
          </div>
          <div className={s.output}>
              <div className={s.frame}></div>
          </div>
      </div>
      <div className='wrapper'>
          <div className='input'>
            <h3>Half-Circle CSS</h3>
            <SyntaxHighlighter className={s.code}language="css" style={dracula}>{halfCircle}</SyntaxHighlighter>
          </div>
          <div className={s.output}>
              <div className={s.halfcircle}></div>
          </div>
      </div>
      <div className='wrapper'>
          <div className='input'>
            <h3>Pentagon CSS</h3>
            <SyntaxHighlighter className={s.code}language="css" style={dracula}>{pentagon}</SyntaxHighlighter>
          </div>
          <div className={s.output}>
              <div className={s.pentagon}></div>
          </div>
      </div>
      <div className='wrapper'>
          <div className='input'>
            <h3>Star of David CSS</h3>
            <SyntaxHighlighter className={s.code}language="css" style={dracula}>{starDavid}</SyntaxHighlighter>
          </div>
          <div className={s.output}>
              <div className={s.starDavid}></div>
          </div>
      </div>
      <div className='wrapper'>
          <div className='input'>
            <h3>Message CSS</h3>
            <SyntaxHighlighter className={s.code}language="css" style={dracula}>{message}</SyntaxHighlighter>
          </div>
          <div className={s.output}>
              <div className={s.message}></div>
          </div>
      </div>
      <div className='wrapper'>
          <div className='input'>
            <h3>Close Cross CSS</h3>
            <SyntaxHighlighter className={s.code}language="css" style={dracula}>{cross}</SyntaxHighlighter>
          </div>
          <div className={s.output}>
              <div className={s.closeCross}></div>
          </div>
      </div>
      <div className='wrapper'>
          <div className='input'>
            <h3>Chevron/Arrow CSS</h3>
            <SyntaxHighlighter className={s.code}language="css" style={dracula}>{chevron}</SyntaxHighlighter>
          </div>
          <div className={s.output}>
              <div className={s.leftChevron}></div>
              <div className={s.rightChevron}></div>
          </div>
      </div>

    </div>
  );
};

export default Shapes;
