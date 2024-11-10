import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import s from './Methods.module.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Task from '../../components/Task/Task'

const str = `
const x = 10;

String(x) // ← перетворення у рядок
x.toString() // ← перетворення у рядок
`

const num = `
const y = '10';
Number(y) //← перетворення у число
+y // ← перетворення у число за допомогою унарного плюсу `

const strToNum = `
const x = '25px'
const y = '25.56px'
Number.parseInt() // → 25 ← лишає число обрізаючи інші символи
Number.parseFloat() // → 25.56 ← лишає числа після крапки
`

const math = `
const x = 4.5;
const a = Math.round(x);   // ← округлює в найближчу сторону → 5
const b = Math.ceil(x);   // ← округлює в більшу сторону → 5
const c = Math.floor(x);   // ← округлює в меншу сторону → 4
const d = Math.random(x);   // ← випадкове число в1д 0 до 1


//--- ↓ Генерувати випадкове число від 0 до 100

const xy = Math.random() * 100 

//--- ↓ Генерувати випадкове число у діапазоні від 500 до 100

const min = 500;
const max = 1000;

const y = Math.round(Math.random () * (max - min) + min);

// ↑ Так як генероване число буде мати значення після коми,
приводимо до цілого числа за допомогою Math.round(), далі,
так як Math.random діє від 0 до 1, рандомне значення множимо на різницю
 між максимальним і мінімальним потрібним числом. Додаємо мінімальне значення
 щоб встановити мінімальну межу.
`

const repl = `
const greetings = 'Hello World';

const fix = greetings.replace('World', 'Friend');

//Метод replace() використовується для заміни одного значення на інше.
у дужках через кому вказуються аргументи → replace('те що треба замінити', 'нове значення')
`

const fix = `

const num = 3.1415926;

console.log(num.toFixed(2));

//↑ Метод лишає стільки знаків після коми, скільки зазначено в дужках.`


const slice = `Метод обрізає рядок відповідно до вказаного індексу, або діапазону індексів. 
Індексація відбувається від 0, тобто СКРИПТ має такі індекси - 0 1 2 3 4 5, 
де С це 0, а Т це 5.

const musicBand = 'The Beatles';

const newName = musicBand.slice(4); 
console.log(newName) // Beatles


//В діапазоні вибірка йде від індексу що нам потрібен до того індексу де ми маємо зупинитись.
//В цьому прикладі, з The Beatles нам потрібен корінь слова - Beat, а це індекси 4,5,6,7 тобто діапазон (4, 8)
const root = musicBand.slice(4, 8)
console.log(root) //Beat

Також можемо використовувати мінусовий індекс.
Наприклад в нас є змінна:
const band = '-Beatles-';
const new_band = band.slice(1, -1);
console.log(new_band); // Beatles`

const lowerUpper = `Методи зміни регістру літер: toLowerCase() - нижній регістр та toUpperCase() - верхній регістр.

const singerName = 'George Harrison';

const lowerCaseName = singerName.toLowerCase();
console.log(lowerCaseName); //george harrison

const upperCaseName = singerName.toUpperCase();
console.log(upperCaseName); //GEORGE HARRISON
`

const includes = `Метод перевіряє чи містить рядок вказані символи.
const text = 'The beatles is my favorite music band';
const music = text.includes('music');
const sound = text.includes('sound');
console.log(music); //true
console.log(sound); //false
`

const startsEnds = `Методи startsWith() та endsWith() перевіряють чи починається рядок з якогось символу чи слова, або закінчується відповідним фрагментом чи символом.

const url = 'http://google.com';
const check = url.endsWith('.com');
const check2 = url.startsWith('https://');
console.log(check) //true
console.log(check2) //false

//перевіримо чи наше посилання починається з літери 'g' після протоколу.
// Для цього через кому після пошукового фрагменту додамо індекс з якого треба перевіряти.

const check3 = url.startsWith('g', 7);
console.log(check3) //true
`

const indOf = `
Шукає індекс символу.
метод indexOf() - починає шукати з початку рядка
lastIndexOf() - шукає з кінця.

В консолі видає номер індексу з якого починається символ чи слово.
Якщо покук за ключевим словом не дав результатів, в консолі бачимо -1.

  const dev = 'I am a fullstack developer. Did you know?';

  const devcheck = dev.indexOf('dev');
  console.log(devcheck); //17

  const devcheck2 = dev.lastIndexOf('know');
  console.log(devcheck2); //36

  const devcheck3 = dev.indexOf('BBC');
  console.log(devcheck3); // -1

`
const trim = `Видаляє зайві пробіли з початку і кінця. 

`
const pad = `Значення для форматування зазначаються через кому. 
Перше значення - це кількість символів в рядку яка має бути, 
а друге - який саме символ має рендеретись, якщо кількість символів в рядку меньше ніж зазначено, пишеться в лапках.

const hours = 5;
const minutes = 7;
const convertedTime = String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0');
console.log(convertedTime); //05:07
`

const join = `Склеює елементи масиву до купи, вставляючи між ними переданий символ чи слово.
Символ, який має розмежовувати елементи масиву задається в дужках.

const theBeatles = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
  const bandList = theBeatles.join('|');
  console.log(bandList);
//John Lennon|Paul McCartney|George Harrison|Ringo Starr
const newList = theBeatles.join('\\n'); //\\n - робить перенос рядку
  console.log(newList);
//John Lennon
//Paul McCartney
//George Harrison
//Ringo Starr

Результатом повертає рядок.` 

const split = `Створює масив з частинок, на які розрізає рядок. 
Спліт застосовується до рядка, перетворюючи його на масив.
розрізання проходить по заданому символу чи слову в дужках.

const str = 'I*Love*New*York';
const str2 = 'I Love Sumy';
const arr = str.split('*');
console.log(arr); //['I', 'Love', 'New', 'York']

const arr2 = str2.split(' ');
console.log(arr2);
`

const sliceArr = ``

const concat = ``

const indexArr = ``
  
const push = `const plov = ['rise', 'pork', 'carrot', 'garlic', 'salt']`

const shift = ``



const Methods: React.FC = () => {

  const startConverter = () => { 
    const userInput = prompt('Введіть своє число')?.trim(); 
const userNumber = userInput !== null ? Number(userInput) : NaN; 
  console.log(userNumber);

  const hours = String(Math.floor(userNumber / 60)).padStart(2, '0');
  //↑ переводимо у рядок, округлюємо, ділимо введене число на 60
  const minutes = String(userNumber % 60).padStart(2, '0');
  //↑ переводимо у рядок, визначаємо залишок від ділення на 60 для введеного числа
  const convertedTime = `${hours}:${minutes}`;
  console.log(convertedTime);
// Додатково ↓
  if (userNumber < 5999) {
    alert(convertedTime);
  } else if (isNaN(userNumber)) {
    alert('you should type a number')
  } else {
    alert('Your Number is too big. The program has a deal only with hours and minutes in a 00:00 format.')
  }
  }

  return (
     <div className='container'>
      <GoHomeBtn />
      <div className={s.sidebar}>
       <div className={s.anchor}>
          <h4>Number methods:</h4>
          <ul className={s.list}>
            <li><a className={s.link} href="#math">Math</a></li>
            <li><a className={s.link} href="#fix">toFixed()</a></li>
          </ul>
       </div>
       <div className={s.anchor}>
          <h4>String methods:</h4>
          <ul className={s.list}>
            <li><a className={s.link} href="#replace">replace()</a></li>
            <li><a className={s.link} href="#slice">slice()</a></li>
            <li><a className={s.link} href="#case">toLowerCase() / toUpperCase()</a></li>
            <li><a className={s.link} href="#includes">includes()</a></li>
            <li><a className={s.link} href="#with">startsWith() / endsWith()</a></li>
            <li><a className={s.link} href="#index">indexOf()</a></li>
            <li><a className={s.link} href="#trim">trim()</a></li>
            <li><a className={s.link} href="#pad">padStart()</a></li>
          </ul>
       </div>
       <div className={s.anchor}>
          <h4>Array methods:</h4>
          <ul className={s.list}>
            <li><a className={s.link} href="#join">join()</a></li>
            <li><a className={s.link} href="#sliceArr">slice()</a></li>
            <li><a className={s.link} href="#split">split()</a></li>
            <li><a className={s.link} href="#concat">concat()</a></li>
            <li><a className={s.link} href="#push">push() / pop()</a></li>
            <li><a className={s.link} href="#indexArr">indexOf()</a></li>
            <li><a className={s.link} href="#shift">shift() / unshift()</a></li>
          </ul>
       </div>
      </div>
     <div className={s.wrapper}>
        <div className='input'>
          <h3>Перетворення у рядок</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{str}</SyntaxHighlighter>
        </div>
        <div className='input'>
          <h3>Перетворення у число</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{num}</SyntaxHighlighter>
          <h3 id='parse'>методи parseInt / parseFloat</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{strToNum}</SyntaxHighlighter>
        </div>
        <div className='input'>
          <h3 id='math'>Math</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{math}</SyntaxHighlighter>
        </div>
        <div className='input'>
          <h3 id='replace'>Заміна значень - replace()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{repl}</SyntaxHighlighter>
        </div>
        <div className='input'>
          <h3 id='fix'>Кількість знаків після коми - toFixed()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{fix}</SyntaxHighlighter>
        </div>

        <div className='input'>
          <h2>Методи рядків</h2>
          <h3 id='slice'>slice()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{slice}</SyntaxHighlighter>
          <h3 id='case'>toLowerCase() / toUpperCase()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{lowerUpper}</SyntaxHighlighter>
          <h3 id='includes'>includes()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{includes}</SyntaxHighlighter>
          <h3 id='index'>indexOf()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{indOf}</SyntaxHighlighter>
          <h3 id='with'>startsWith() / endsWith()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{startsEnds}</SyntaxHighlighter>
          <h3 id='trim'>trim()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{trim}</SyntaxHighlighter>
          <h3 id='pad' >padStart()</h3>
          <p className='description'>Форматує рядок, додаючи на початок рядку (padStart) чи в кінець рядку (padEnd) зазначені символи, підганяючи його до відповідного зразку/формату. Найчастіший приклад використання це оформлення дати та часу, де потрібне двознакове вираження (5 годин перетворити на '05')</p>
          <SyntaxHighlighter language="jsx" style={dracula}>{pad}</SyntaxHighlighter>
        </div>

        <div>
          <h2>Задачі на використання методів рядка</h2>
          <Task
            problem='Напиши скрипт який перевіряє чи закінчується значення
 змінної link символом /. Якщо ні, додай до кінця значення link цей символ.'
            solution={`let link = 'https://google.com';
  if (!link.endsWith('/')) { //← Якщо посилання НЕ закінчується слешем, тоді
    link += '/'; // ← за допомогою канкатенації додаємо до змінної слеш.
  } else {console.log('no slash needed')}`}></Task>
        
          <Task
            problem='Форматування посилання (includes та логічне «І»)
 : Напиши скрипт який перевіряє чи закінчується значення
  змінної link символом /. Якщо ні, додай до кінця
  значення link цей символ, але тільки в тому випадку,
  якщо в link є підрядок "my-site".
  Використовуй конструкцію if...else або тернарний оператор.'
          solution={`let url = 'https://my-site.com/about';

if (!url.endsWith('/') && url.includes('my-site')) {
 url += '/';
}
console.log(url);`}></Task>
          <Task
            problem='Перевірити чи містять рядки заборонені ключові слова. const blacklistedWord1 = spam; const blacklistedWord2 = sale;'
          solution={`const blacklistedWord1 = 'spam';
const blacklistedWord2 = 'sale';

const message =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = '#fatlivesmatter advertising campaign';

const includesBanWord1 = string3.toLowerCase().includes(blacklistedWord1);
const includesBanWord2 = string3.toLowerCase().includes(blacklistedWord2);
const includesBanWords = includesBanWord1 || includesBanWord2;

if (includesBanWords) {
  console.log('Аяйяй');
} else {
  console.log(message);
}`}></Task>
          <Task
            problem='Напишіть програму, яка отримає від користувача число(кількість хвилин) та виведе в консоль рядок у форматі годин та хвилин. Наприклад 70 === 01:10.'
          solution={`const userNumber = prompt('Введіть своє число')?.trim();
  console.log(userNumber);

  const hours = String(Math.floor(userNumber / 60)).padStart(2, '0');
  //↑ переводимо у рядок, округлюємо, ділимо введене число на 60
  const minutes = String(userNumber % 60).padStart(2, '0');
    //↑ переводимо у рядок, визначаємо залишок від ділення на 60 для введеного числа
  const convertedTime = \`\${hours}:\${minutes}\`;
  console.log(convertedTime);
// Додатково ↓
  if (userNumber < 5999) {
    alert(convertedTime);
  } else if (isNaN(userNumber)) {
    alert('you should type a number')
  } else {
    alert('Your Number is too big. The program has a deal only with hours and minutes in a 00:00 format.')
  }
` }></Task>
          <button style={{ margin: '8px 0'}} className='btn' type="button" onClick={startConverter}>Запустити TimeConverter</button>
          
        </div>
 <div className='input'>
          <h2>Методи масивів</h2>
          <h3 id='join'>join()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{join}</SyntaxHighlighter>
          <h3 id='split'>split()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{split}</SyntaxHighlighter>
          <h3 id='sliceArr'>slice()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{sliceArr}</SyntaxHighlighter>
          <h3 id='concat'>concat()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{concat}</SyntaxHighlighter>
          <h3 id='indexArr'>indexOf()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{indexArr}</SyntaxHighlighter>
          <h3 id='push'>push()/pop()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{push}</SyntaxHighlighter>
          <h3 id='shift'>shift()/unshift()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{shift}</SyntaxHighlighter>
        </div>
<Task
            problem=''
          solution={``}></Task>
        <Task
            problem=''
          solution={``}></Task>
        <Task
            problem=''
          solution={``}></Task>
     </div>
      

    </div>
  )
}

export default Methods