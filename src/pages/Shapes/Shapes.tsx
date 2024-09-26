import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn'; 
import s from './Shapes.module.css'; // Импортируем стили
import clsx from "clsx";

const Shapes: React.FC = () => {
  // Определяем CSS-код в виде строки, чтобы показать его в текстовом формате
  const triangleCSS = `
    .triangle {
      width: 300px;
      height: 300px;
      background: green;
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
    }
  `;

  const octagonCSS = `
    .octagon {
      width: 300px;
      height: 300px;
      background: pink;
      clip-path: polygon(
        16.6% 16.6%, 50% 0, 83.3% 16.6%, 100% 50%, 
        83.3% 83.3%, 50% 100%, 16.6% 83.3%, 0 50%
      );
    }
  `;

  const ovalCSS = `
    .oval {
      width: 300px;
      height: 400px;
      background: green;
      border-radius: 100% / 120% 120% 75% 75%;
    }
  `;

    const sparkCSS = `
    .spark{
    width: 200px;
    aspect-ratio: 1;
    background: purple;
    clip-path: polygon(40% 40%, 50% 0, 60% 40%,
    100% 50%, 60% 60%, 50% 100%, 40% 60%, 0 50%);
    }
  `;

  return (
    <div className={clsx(s.container, s.gap)}>
      <GoHomeBtn />

      <div className='wrapper'>
          <div className='input'>
            <h3>Spark CSS</h3>
            <pre>{sparkCSS}</pre>
          </div>
          <div className='output'>
              <div className={s.spark}></div>
          </div>
      </div>
      <div className='wrapper'>
          <div className='input'>
            <h3>Triangle CSS</h3>
            <pre>{triangleCSS}</pre>
          </div>
          <div className='output'>
              <div className={s.triangle}></div>
          </div>
      </div>
      <div className='wrapper'>
          <div className='input'>
            <h3>Octagon CSS</h3>
            <pre>{octagonCSS}</pre>
          </div>
          <div className='output'>
              <div className={s.octagon}></div>
          </div>
      </div>
      <div className='wrapper'>
          <div className='input'>
            <h3>Oval CSS</h3>
            <pre>{ovalCSS}</pre>
          </div>
          <div className='output'>
              <div className={s.oval}></div>
          </div>
      </div>
    
    </div>
  );
};

export default Shapes;
