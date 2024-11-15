
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

const forarr = `
Для початку виведемо окремо кожен елемент масиву в консоль.

 const hpCharacters = ["Harry Potter", "Hermione Granger",
 "Ron Weasley", "Albus Dumbledore", "Severus Snape", "Lord Voldemort",
 "Minerva McGonagall", "Rubeus Hagrid", "Sirius Black"];
  for (let i = 0; i < hpCharacters.length; i++){
    console.log(hpCharacters[i]);
  }
  ↑ ми створили цикл з початковим індексом 0, сказали що цикл буде діяти,
   доти індекс меньше за довжину масиву(тобто кількість елементів в ньому)
  і як результат на кожній ітерації виводити елемент з поточним індексом в консоль та збільшувати індекс інкрементом.


const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
for(i = 0; i < planets.length; i+=2){
console.log(planets[i])//Mercury, Earth, Jupiter, Uranus
}

↑ Тут перебираємо елементи через один (і+=2).

const theBeatles = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
for(i = 0; i < theBeatles.length; i++){
theBeatles[i] = theBeatles[i].toUpperCase(); 
}
console.log(theBeatles); //JOHN LENNON,PAUL MCCARTNEY,GEORGE HARRISON,RINGO STARR
↑ Змінюємо елементи масиву


А тепер нам треба кожне число масиву помножити на два і порахувати суму.
const fiboNumbers = [2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
let total = 0; // ← створюємо змінну для зберігання суми всіх чисел
for(let i = 0; i < fiboNumbers.length; i++){
fiboNumbers[i] *= 2;
total += fiboNumbers[i]}
console.log(total);//1968

  `

const forof = `
for..of не працює з індексами, ми звертаємося безпосередньо до кожної одиниці/елементу.
Використовуємо, коли нам не потрібно змінювати елементи.

const colors = ['🟣', '🟢', '🔴', '🔵', '🟠', '🟡', '🟤', '⚪', '⚫'];

for (const color of colors){ //← Створюємо змінну з назвою яка відповідає однині від назви масиву

  //Тепер перебираючи кожен колір дамо йому короткий опис за допомогою switch(){}.

switch(color){
  case '🟢' :
    console.log('🟢 - color of nature');
    break;
  case '🔴' :
    console.log('🔴- color of passion');
    break;
  case '🟣' :
    console.log('🟣 - my favorite color');
    break;
  case '🔵' :
    console.log('🔵 - color of the clear sky');
    break;
  case '🟤' :
    console.log('🟤 - color of the earth');
    break;
  case '🟡' :
    console.log('🟡 - color of happiness');
    break;
  case '🟠' :
    console.log('🟠 - color of energy');
    break;
  case '⚪' :
    console.log('⚪ - color of purity');
    break;
  case '⚫' :
    console.log('⚫ - color of mystery');
    break;
  default: 
    console.log('no color found - ' + color);
    break;
};
};
//🟣 - my favorite color
//🟢 - color of nature
//🔴- color of passion
//🔵 - color of the clear sky
//🟠 - color of energy
//🟡 - color of happiness
//🟤 - color of the earth
//⚪ - color of purity
//⚫ - color of mystery

Тут знайдемо кольори світлофору:

const colors = ['🟣', '🟢', '🔴', '🔵', '🟠', '🟡', '🟤', '⚪', '⚫'];
const trafficLights = [];

for(const color of colors){
if(color === '🔴' || color === '🟢'|| color === '🟡' ){
trafficLights.push(color)}
}
console.log(trafficLights)//🟢,🔴,🟡

Наприклад до кожного елементу додамо ціну. Використаємо методи Math.round та Math.random

const fruits = ['🍒', '🍇', '🍌', '🍉', '🍏', '🍍', '🥝', '🍊', '🍓'];
for (const fruit of fruits) {
  console.log(\`\${fruit} - \${Math.round(Math.random() * 100)} грн\`);
//🍒 - 97 грн
//🍇 - 54 грн
//🍌 - 80 грн
//🍉 - 43 грн
//🍏 - 97 грн
//🍍 - 12 грн
//🥝 - 23 грн
//🍊 - 7 грн
//🍓 - 97 грн
}
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
        <Task problem='Напишіть цикл, який виводить у консоль усі парні числа від min до max. const max = 50; const min = 23;'
          solution={`const max = 50;
const min = 23;

for (let i = min; i <= max; i++){
    if (i % 2 ===0) {
        console.log(i)
    }
}`}></Task>
        
    <div>
          <h2 className='title'>Ітерація по масиву</h2>
          <h3>Цикл for</h3>
        <p className='description'></p>
           <SyntaxHighlighter language="jsx" style={dracula}>
        {forarr}
        </SyntaxHighlighter>
        
          <h3>Цикл for...of</h3>
        <p className='description'></p>
           <SyntaxHighlighter language="jsx" style={dracula}>
        {forof}
        </SyntaxHighlighter>
      </div>

    <Task
    problem='Напиши скрипт для перебору масиву fruits.
 Для кожного елемента масиву виведи в консоль рядок
 у форматі номер_елемента: значення_елемента.
 Нумерація елементів повинна починатися з 1.'
          solution={`const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
for (let i = 0; i < fruits.length; i++) {
const message = \`\${i + 1}) \${fruits[i]}\`;
console.log(message);
 }`}></Task>
        <Task problem='Напиши скрипт, який підраховує суму всіх парних чисел у масиві.'
          solution={`const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
for(const number of numbers){
if(number % 2 === 0){
total += number}
}
console.log(total);//86`}></Task>
        <Task problem='Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв\`язання задачі.'
          solution={`const values = [2, 17, 94, 1, 23, 37];
let min = values[0];
for (let i = min; i < values.length; i++){
if(values[i] < min){
min = values[i]}}
console.log(min);//94

або більш лаконічне, без зайвого з for..of
for (const value of values) {
   if (value < min) {
   min = value;}
}
console.log(min); //94
`}></Task>
        <Task problem='
Функція createArrayOfNumbers(min, max) приймає два параметра:

min - ціле число, з якого починаються обчислення
max - ціле число, до якого включно триватимуть обчислення
Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно." '
          solution={`function createArrayOfNumbers(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    console.log(\`arr.push(\${i})\`);
    arr.push(i);
  }
  console.log(arr)
  return arr;
}
createArrayOfNumbers(3, 9)//3,4,5,6,7,8,9
`}></Task>

      </div>

    </div>
  )
}

export default Cycles