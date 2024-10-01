import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import s from './Calc.module.css'

const Calc:React.FC = () => {
  return (
 <div className='container'>
          <GoHomeBtn />
            <h2>How to make a calculator using JS</h2>
          <div className="input">
              <ul>
                  <li>Step 1 - </li>
              </ul>
          </div>
          <div className={s.calculator}>
              <div className={s.wrapper}>
                  <input className={s.input} type="text" />
                  <div className={s.grid}>
                      <button type="button">AC</button>
                      <button type="button">+/-</button>
                      <button type="button">%</button>
                      <button type="button">/</button>
    
                      <button type="button">7</button>
                      <button type="button">8</button>
                      <button type="button">9</button>
                      <button type="button">*</button>
    
                      <button type="button">4</button>
                      <button type="button">5</button>
                      <button type="button">6</button>
                      <button type="button">-</button>
    
                      <button type="button">1</button>
                      <button type="button">2</button>
                      <button type="button">3</button>
                      <button type="button">+</button>
    
                      <button type="button">0</button>
                      <button type="button">,</button>
                      <button type="button">=</button>
                  </div>


              </div>
          </div>
</div>
      
  )
}

export default Calc