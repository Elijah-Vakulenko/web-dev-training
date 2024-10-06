import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import React from 'react';
import s from './Calc.module.css'

const htmlStructure = `
    <div className={s.wrapper}>
      <input className={s.display} type="text" readOnly/>
         <div className={s.grid}>
                <button value="C" type="button">AC</button>
                <button value="D" type="button">Del</button>
                <button value="%" type="button">%</button>
                <button value="/" type="button">/</button>
    
                <button value="7" type="button">7</button>
                <button value="8" type="button">8</button>
                <button value="9" type="button">9</button>
                <button value="*" type="button">*</button>
    
                <button value="4" type="button">4</button>
                <button value="5" type="button">5</button>
                <button value="6" type="button">6</button>
                <button value="-" type="button">-</button>
    
                <button value="1" type="button">1</button>
                <button value="2" type="button">2</button>
                <button value="3" type="button">3</button>
                <button value="+" type="button">+</button>
    
                <button value="0" type="button">0</button>
                <button value="00" type="button">00</button>
                <button value="." type="button">,</button>
                <button value="=" type="button">=</button>
              </div>
      </div>
    `

const Calc: React.FC = () => {
 

  return (
 <div className='container'>
          <GoHomeBtn />
            <h2>How to make a calculator using JS</h2>
          <div>
              <ul>
          <li><h3>Step 1 - html / css </h3>
            <div className='input'>
              <pre>{htmlStructure}</pre>
            </div>
          </li>
                  <li><h3>Step 2 - Display</h3> </li>
                  <li><h3>Step 3 - Operators </h3></li>
              </ul>
          </div>
          <div className={s.calculator}>
            <div className={s.wrapper}>
              <input className={s.display} id="display" type="text" readOnly/>
              <div className={s.grid}>
                <button value="C" type="button">AC</button>
                <button value="D" type="button">Del</button>
                <button value="%" type="button">%</button>
                <button value="/" type="button">/</button>
    
                <button value="7" type="button">7</button>
                <button value="8" type="button">8</button>
                <button value="9" type="button">9</button>
                <button value="*" type="button">*</button>
    
                <button value="4" type="button">4</button>
                <button value="5" type="button">5</button>
                <button value="6" type="button">6</button>
                <button value="-" type="button">-</button>
    
                <button value="1" type="button">1</button>
                <button value="2" type="button">2</button>
                <button value="3" type="button">3</button>
                <button value="+" type="button">+</button>
    
                <button value="0" type="button">0</button>
                <button value="00" type="button">00</button>
                <button value="." type="button">,</button>
                <button value="=" type="button">=</button>
              </div>
            </div>
          </div>
</div>
      
  )
}

export default Calc