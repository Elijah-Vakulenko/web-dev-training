import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn'; 
import s from './BranchStatements.module.css'
import React, { useState } from 'react';

const ifStatement = `
const age = 10;

if(age >= 18) {

  // Якщо умова дорівнюватиме булевому значенню -  true, тоді тіло блоку if виконається 

}

---------------------------------------------------------------------

const password = QWERTY;

if(password.length < 8){
  console.log('invalid password');
}
`
const ifElseStatement = `
const age = 10;

if(age >= 18) {
  console.log('You're an adult...')

  // Якщо умова дорівнюватиме булевому значенню -  true,
  тоді тіло блоку if виконається і в консолі ми побачимо що ми дорослі

} else {
 console.log('You're a baby doll...')

 //якщо умова дорівнюватиме булевому значенню -  false,
 тоді виконається тіло блоку else, а в консолі побачимо що ми лялечки)

 //оскільки age = 10 ми отримаємо значення false
}

------------------------------------------------------------

//Далі для наочності бачимо поле інпуту для перевірки віку.

const yourAge = Number(age);

// Перетворюємо рядок набраний нами у інпуті у число.
age це значення value у інпуті

(<input
  type="text"
  value={age}
  placeholder="Введіть ваш вік"
  pattern="^[1-9][0-9]?$|^100$" />)

    if (yourAge < 18) {
      //↓ якшо нам меньше 18 побачимо таке попередження.

      alert('Ооо...=( тобі ще не достатньо рочків...');
      
    } else {
       //↓ а якщо більше 18, то таке...

      alert('Молодий був - дурний був, старий став - зовсім як молодий...еге ж?');
    }
`
const elseIfStatement = `

`

const ternaryOperator = `
`

const BranchStatements: React.FC = () => {
  
const [age, setAge] = useState<string>(''); // Стан для віку, зберігається як рядок

  // Функція для обробки відправлення форми
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    const yourAge = Number(age); // Перетворюємо рядок у число

    if (yourAge < 18) {
      alert('Ооо...=( тобі ще не достатньо рочків...');
    } else {
      alert('Молодий був - дурний був, старий став - зовсім як молодий...еге ж?');
    }
  };

  return (
    <div className='container'>
      <GoHomeBtn />
      <div>
        <h3>if branch statesment</h3>
        <p>instruction if(condition) &#123;statement &#125;</p>
        <div className="input">
          <pre>{ifStatement}</pre>
        </div>
      </div>
      <div>
        <h3>if...else branch statesment</h3>
        <div className="input">
          <pre>{ifElseStatement}</pre>
        </div>
        <div className={s.wrapper}>
          <form onSubmit={onSubmit} className={s.form}>
            <input className={s.input} type="text"  value={age}
            onChange={(e) => setAge(e.target.value)} 
            placeholder="Введіть ваш вік"
            pattern="^[1-9][0-9]?$|^100$" />
          <button className={s.btn}  type="submit">Перевірити</button>
          </form>
        </div>
      </div>
      <div>
        <h3>else...if branch statesment</h3>
        <div className="input">
          <pre>{elseIfStatement}</pre>
        </div>
      </div>
      <div>
        <h3>ternary operator</h3>
        <div className="input">
          <pre>{ternaryOperator}</pre>
        </div>
      </div>
    </div>
  )
}

export default BranchStatements