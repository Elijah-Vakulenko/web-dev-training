
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import Task from '../../components/Task/Task';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react';

const forCycle = `for( let i = 1; i <= 10; i += 1 ){
console.log(i, 'Міссісіпі')
}`;

const simpleWhile = `
let i = 10;
while(i > 0) {
  console.log('lets count - ', i);
  i--;
}`

const price = `let price = 1500;
const targetPrice = 800;
while(price > targetPrice && !targetPrice < 800 ){
  console.log('Чи не могли б ви зробити знижку?');
  price -= Math.min(Math.round(Math.random() * 200), price - targetPrice);
  //↑ Тут ми зменшуємо ціну застосовуючи рандомайзер від 0 до 200 та заокруглення до цілого, а потім Math.min  обирає найменше число
  // між рандомним і різницею нашої ціни та бажаної ціни(це робить неможливим падіння ціни меньше 800, 
  //оскільки якщо на останній ітерації рандомне число буде бльшим за різницю цін, 
  //то буде обрана саме різниця цін, що при мінусуванні дасть нам рівно 800).
  console.log('Можу віддати за -', price, 'гривень');
}
  console.log('Добре, купую!');`

const game = `const startGame = () => {
  const random = Math.round(Math.random() * 100);
  let userValue: number | null = null;

  console.log(random); // виводимо загадане число у консоль для перевірки роботи коду

  while (userValue !== random) {
    const input = prompt('Введіть свою здогадку');
    
    // Перевірка: якщо input дорівнює null, тоді відміняємо введення числа
    if (input === null) {
      alert("Гру скасовано");
      break;
    }
//перетворюємо на введене число беспосередньо у тип даних number
    userValue = parseInt(input, 10);

    // якщо введено не числове значення, викликаємо попередження
    if (isNaN(userValue)) {
      alert("Будь ласка, введіть допустиме число.");
      continue;
    }

    if (userValue === random) {
      alert('Ти виграв!!!');
    } else if (userValue > random) {
      alert('Твоя здогадка завелика');
    } else {
      alert('Твоя здогадка менша');
    }
  }
};`


const doWhile = `let counter = 1
do {counter += 1;
console.log(counter)} while (counter < 10);
`    

const Cycles: React.FC = () => { 

  const startGame = () => {
  const random = Math.round(Math.random() * 100);
  let userValue: number | null = null;

  console.log(random); 

  while (userValue !== random) {
    const input = prompt('Введіть свою здогадку');

    if (input === null) {
      alert("Гру скасовано");
      break;
    }

    userValue = parseInt(input, 10);

    if (isNaN(userValue)) {
      alert("Будь ласка, введіть допустиме число.");
      continue;
    }

    if (userValue === random) {
      alert('Ти виграв!!!');
    } else if (userValue > random) {
      alert('Твоя здогадка завелика');
    } else {
      alert('Твоя здогадка менша');
    }
  }
};


  return (
    <div className='container'>
      <GoHomeBtn />
      <div>
        <h2 className='title'>Цикл for</h2>
        <p className='description'>
      Використовуємо, коли відома кількість повторень циклу.<br/>
      Структура: for( 1 ; 2 ; 3 )
        </p>
      <ul>
        <li>1. Початкове значення змінної - зазвичай назва змінної "i" тобто index, а сама змінна повинна мати змогу перезаписуватися тобто - let</li>
        <li> 2. Умова до якої буде виконуватися цикл / кінцеве значення  - результат умови це завжди булеве значення true / false</li>
        <li>3. Пост-умова - в пост-умові замість i+=1 використовуємо інкремент чи дикремент i++ i--</li>
        <li>В фігурних дужках прописуємо логіку того що має вібуватися за кожної ітерації</li>
      </ul>
      <SyntaxHighlighter language="jsx" style={dracula}>
        {forCycle}
      </SyntaxHighlighter>
      </div>
       <div>
        <h2 className='title'>while(){}</h2>
        <p className='description'>Використовуємо, коли не відома точна кількіть повторень(ітерацій), тобто цикл діє доки не виконається певна умова. Зробимо простий зворотній лічильник: доки змінна більша за нуль будуть проходити ітерації результатом яких буде -1. 
        </p>
                 <SyntaxHighlighter language="jsx" style={dracula}>
           {simpleWhile}
        </SyntaxHighlighter>
        <p className='description'>Пояснемо дію циклу на прикладі ситуації на ринку. Скажімо, що товар який вас цікавить коштує 1500 гривень, а для вас прийнятною булаа б ціна в 800 гривень.
          Торгуючись, висуваючи свої аргументи кожен раз ви змінюєте ціну. Ми не знаємо скільки разів нам треба не погодитись з ціною. Вмовляння йде доти ціна не становитиме 800. </p>
         <SyntaxHighlighter language="jsx" style={dracula}>
           {price}
        </SyntaxHighlighter>
        <div className="output">
          <p>Чи не могли б ви зробити знижку?</p>
<p>Можу віддати за - 1371 гривень</p>
<p>Чи не могли б ви зробити знижку?</p>
<p>Можу віддати за - 1307 гривень</p>
<p>Чи не могли б ви зробити знижку?</p>
<p>Можу віддати за - 1144 гривень</p>
<p>Чи не могли б ви зробити знижку?</p>
<p>Можу віддати за - 1008 гривень</p>
<p>Чи не могли б ви зробити знижку?</p>
<p>Можу віддати за - 821 гривень</p>
<p>Чи не могли б ви зробити знижку?</p>
<p>Можу віддати за - 800 гривень</p>
<p>Добре, купую!</p>
        </div>
        <p>Зробимо невелику гру відгадайку. Буде генеруватися випадкове число від 0 до 100. Ми маємо ввести нашу здогадку в промпт в свою чергу алерт повідомить нам підказку</p>
         <SyntaxHighlighter language="jsx" style={dracula}>
           {game}
        </SyntaxHighlighter>
        <p>Що ми тут зробили: ми створили рандомайзер та змінну для фіксування числа яке ми припускаємо (наша поточна відгадка), поки що змінна дорівнює null. Далі ми кажемо - ДОКИ наше припущення не дорівнюватиме загаданому рандомному числу нам буде вмикаися діалогове вікно, куди треба вписати своє припущення. За допомогою розгалуження додаємо додаткові умови. Якщо наша здогадка дорівнює рандомному числу - ми виграли...якщо наша здогадка завелика чи замала побачимо відповідну підказку.</p>
        <button style={{marginTop : 10, marginBottom : 10}} className='btn' onClick={startGame}>Почати гру</button>
        <p>P.S. В консолі відповідь</p>
      </div>
      <div>
      <h2 className='title'>do&#123;&#125; while()</h2>
        <p className='description'>Принципово логіка while та do/while не відрізняється. Різниця полягає в тому що при while спочатку робиться перевірка умови а потім дія, а при do\while спочатку відбувається перша ітерація тобто фактична дія, а потім йде перевірка чи потрібно продовжувати цикл чи перша ітерація задовольняє наші цілі і варто зупинити виконання циклу.</p>
           <SyntaxHighlighter language="jsx" style={dracula}>
        {doWhile}
        </SyntaxHighlighter>
        <p>ДІЯ - будемо збільшувати лічильник на 1, доки ПЕРЕВІРКА УМОВИ - лічильник меньше 10.</p>
      </div>
      <div>
      <h2 className='title'>Задачі на тренування циклів</h2>
    <Task problem='Напиши цикл for, який виводить у консоль браузера числа за зростанням від a до b, але тільки якщо число кратне 5. const a = 100; const b = 20;' solution={`
  const a = 100;
  const b = 20;

  for (let i = a; i >= b; i--){
    if (i % 5 === 0) { //перевірка кратності
         console.log(i);
    };
  }`}></Task>
        <Task problem='Напиши скрипт, який підраховує суму всіх парних чисел, які входять в діапазон чисел у змінних від min до max. Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6. const min = 10; const max = 50; let total = 0;' solution={`const min = 10;
const max = 50;
  let total = 0;

  for (let i = min; i <= max; i++){
    if (i % 2 === 0) { total += i; }
  }
console.log(total) //630`}></Task>
    <Task problem='' solution={``}></Task>
      </div>

    </div>
  )
}

export default Cycles