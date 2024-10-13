import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
// import React, { useEffect } from 'react';
import s from './Calc.module.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const htmlStructure = `
    <div className={s.wrapper}>
      <input className={s.display} type="text" readOnly/>
         <div className={s.grid}>
                <button className="b" value="C" type="button">AC</button>
                <button className="b" value="D" type="button">Del</button>
                <button className="b" value="%" type="button">%</button>
                <button className="b" value="/" type="button">/</button>
    
                <button className="b" value="7" type="button">7</button>
                <button className="b" value="8" type="button">8</button>
                <button className="b" value="9" type="button">9</button>
                <button className="b" value="*" type="button">*</button>
    
                <button className="b" value="4" type="button">4</button>
                <button className="b" value="5" type="button">5</button>
                <button className="b" value="6" type="button">6</button>
                <button className="b" value="-" type="button">-</button>
    
                <button className="b" value="1" type="button">1</button>
                <button className="b" value="2" type="button">2</button>
                <button className="b" value="3" type="button">3</button>
                <button className="b" value="+" type="button">+</button>
    
                <button className="b" value="0" type="button">0</button>
                <button className="b" value="00" type="button">00</button>
                <button className="b" value="." type="button">,</button>
                <button className="b" value="=" type="button">=</button>
              </div>
      </div>
    `

const Calc: React.FC = () => {
 
  // useEffect(() => {
  //   const display = document.getElementById('display');
  //   const buttons = document.querySelectorAll('button');
  //      buttons.forEach(button => {
  //     button.addEventListener('click', function (event) {
  //       if (!event.target.classList.contains('b')) return;
  //       const value = event.target.innerText;

  //       switch (value) {
  //         case 'C':
  //           result innerText = '';
  //           break;
          
  //         case 
  //       }
  //   })
  // }, []);
  return (
 <div className='container'>
          <GoHomeBtn />
            <h2 className='title'>How to make a calculator using JS</h2>
          <div>
              <ul>
          <li><h3 className='title'>Step 1 - html / css </h3>
            <div className='input'>
              <SyntaxHighlighter language="jsx" style={dracula}>
                {htmlStructure}
              </SyntaxHighlighter>
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
                <button className="b" value="C" type="button">AC</button>
                <button className="b" value="D" type="button">Del</button>
                <button className="b" value="%" type="button">%</button>
                <button className="b" value="/" type="button">/</button>
    
                <button className="b" value="7" type="button">7</button>
                <button className="b" value="8" type="button">8</button>
                <button className="b" value="9" type="button">9</button>
                <button className="b" value="*" type="button">*</button>
    
                <button className="b" value="4" type="button">4</button>
                <button className="b" value="5" type="button">5</button>
                <button className="b" value="6" type="button">6</button>
                <button className="b" value="-" type="button">-</button>
    
                <button className="b" value="1" type="button">1</button>
                <button className="b" value="2" type="button">2</button>
                <button className="b" value="3" type="button">3</button>
                <button className="b" value="+" type="button">+</button>
    
                <button className="b" value="0" type="button">0</button>
                <button className="b" value="00" type="button">00</button>
                <button className="b" value="." type="button">,</button>
                <button className="b" value="=" type="button">=</button>
              </div>
            </div>
          </div>
</div>
      
  )
}

export default Calc