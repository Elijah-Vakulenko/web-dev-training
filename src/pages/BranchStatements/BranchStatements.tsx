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
//Якщо умов багато, тоді використовуємо else if.


let weather: string = 'rainy'; //← задаємо значення погоди - дощить

  console.log(weather);

  //Зробимо невелику функцію з else if.

  function weatherChecker() {
    if (weather === 'sunny') console.log('Don\'t forget your sunglasses');
    //↑ Робимо першу умову, якщо вона відповідає значенню true інші умови не оброблятимуться.
    // Якщо перша умова - false, розгалудження переходить до другої умови ↓.
  else if (weather === 'rainy') console.log('Grab your raincoat');
  else if (weather === 'windy') console.log('You should wear a scarf');
  // Якщо жодна умова if не відповідає true, виконується останній else.
  else console.log('The weather is awesome today! Have fun!')
  }
  
  weatherChecker(); // ← після перевірки отримаємо повідомлення - вдягніть дощовик

  weather = 'sunny';    // змінюємо погоду на - сонячно
  console.log(weather);
  weatherChecker(); // після перевірки отримаємо меседж - не забудь окуляри!

  weather = 'cloudy';  //тепер погода - хмарно
  console.log(weather);
  weatherChecker(); // Оскільки перевірка за всіма прописаними варіантами дає false,
  отримуємо універсальну відповідь прописану в останньому else.


`

const ternaryOperator = `

 let hour:number = 18;

  function timeFormatChecker() {
     console.log(hour < 12 ? 'AM' : 'PM') };

  timeFormatChecker();

  hour = 11;
  timeFormatChecker();

  hour = 7;
  timeFormatChecker();
`

const switchCase = `
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
        <p>instruction if() &#123;&#125;</p>
        <div className="input">
          <pre>{ifStatement}</pre>
        </div>
      </div>
      <div>
        <h3>if...else branch statesment</h3>
        <p>instruction if() &#123; &#125; else &#123; &#125;</p>
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
        <p>if() &#123; &#125;  else if() &#123; &#125;... else if() &#123; &#125; else  &#123; &#125;</p>
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
      <div>
        <h3>Switch()</h3>
        <div className="input">
          <pre>{switchCase}</pre>
        </div>
      </div>
    </div>
  )
}

export default BranchStatements