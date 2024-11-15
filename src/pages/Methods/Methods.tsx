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

const sliceArr = `Обрізає масив у вибраному діапазоні елементів.
Діапазон індексів задається в дужках, якщо дужки залишити порожніми, тоді метод створює копію масива.

const cars = ['audi', 'toyota', 'honda', 'nissan', 'volkswagen', 'daewoo']; 
const japanese = cars.slice(1, 4);
console.log(japanese); //toyota,honda,nissan
`

const concat = `Зліплює декілька масивів в один за допомогою канкатенації.
const mondler = ['Monica Geller', 'Chandler Bing'];
const weWereOnABreakCouple = ['Ross Geller', 'Rachel Green'];
const friends = [].concat(mondler, weWereOnABreakCouple, ['Phoebe Buffay', 'Joey Tribbiani']);
  console.log(friends); // Monica Geller,Chandler Bing,Ross Geller,Rachel Green,Phoebe Buffay,Joey Tribbiani`

const indexArr = `
Метод перевіряє наявність зазначеного у душках символа чи слова та видає індекс елемента. Накшталт методу includes() який повертає булеве true | false.
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const earth = planets.indexOf('Earth');
  console.log(earth); //2

Метод знаходить індекс першшого знайденого елементу який відповідає запиту, 
то ж якщо в масиві два однакових елемента, метод спрацює тільки на першому.

  const numbers = [5, 0, 3, 9, 1, 4, 7, 9, 4, 5];
  const nine = numbers.indexOf(9);
  console.log(nine); // 3`

const at = `Виводить елемент за вказаним індексом.
const ukrainianCities = ['Київ', 'Львів', 'Харків', 'Одеса', 'Дніпро', 'Запоріжжя', 'Івано-Франківськ', 'Тернопіль', 'Чернівці', 'Вінниця', 'Полтава', 'Суми', 'Чернігів', 'Черкаси', 'Хмельницький', 'Рівне', 'Житомир', 'Ужгород', 'Луцьк', 'Миколаїв', 'Херсон', 'Донецьк', 'Луганськ', 'Кропивницький', 'Сімферополь'];
  const cityNumberEleven = ukrainianCities.at(11);
  console.log(cityNumberEleven); //Суми `
  
const push = `Метод push() - додає новий елемент в кінець масиву. Також повертає нову довжину масиву.
Метод pop() - видаляє останній елемент масиву та повертає його. Дужки лишаємо порожніми.

  const food = ['rise', 'pork', 'egg', 'cake'];
  const breakfast = food.push('apple juice', 'salad');
  console.log(breakfast); // 6  ['rise', 'pork', 'egg', 'cake', 'apple juice', 'salad'];
  const dinner = food.pop();
  console.log(dinner); // 'salad'
`

const shift = `
Метод shift() - видаляє перший елемент масиву та повертає в консоль видалений елемент.
Метод unshift() - додає на почток вказаний у дужках елемент чи декілька елементів. Повертає нову довжину масива.

  const food = ['rise', 'pork', 'egg', 'cake'];
  const breakfast = food.unshift('apple juice', 'salad');
  console.log(breakfast); // 6  [ 'apple juice', 'salad', 'rise', 'pork', 'egg', 'cake'];
  const dinner = food.shift();
  console.log(dinner); // 'apple juice';
`

const splice = `
Метод видаляє, додає чи замінює елементи по наданому індексу.
В дужках приймає першим аргументом номер індекса з яким буде проводитись операція. Другим аргументом приймає індекс до якого буде видалення. 
Третій аргумент це рядок чи число яке буде вставлено чи на яке буде замінено елемент.
якщо другий аргумент 0 тоді на місце вказаного першого індекса додасться новий елемент посунувши наступні. 
Якщо другий аргумент 1 тоді казаний індекс видалиться якщо 2 тоді видаляться вказаний індекс і наступний елемент. 
Тобто другий аргумент зазначає кількість видалених елементів.
  const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
planets.splice(2, 1, 'Terra Nova'); ← тут починаємо з 2го індекса (3й елемент), видаляємо 1 елемент та додаємо новий, по факту робимо заміну.
  console.log(planets);//Mercury,Venus,Terra Nova,Mars,Jupiter,Saturn,Uranus,Neptune`

const filter = `Використовуємо, для того щоб створити окремий масив, 
де елементами будуть тільки ті, що задовольняють нашу певну умову, тобто відфільтровані.
Щоб прописати умову нам потрібна колбек фунція, на відміну від попередній методів, 
цей не можна застосувати просто до масиву, необхідна функція.

  const fiboNumbers = [2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711];
  const evenFilteredNumbers = fiboNumbers.filter(number => number % 2 === 0);
  console.log(evenFilteredNumbers); // [2,8,34,144,610,2584,10946]

 const friends = ['Ross Geller', 'Rachel Green', 'Chandler Bing', 'Monica Geller', 'Joey Tribbiani', 'Phoebe Buffay'];
  const nameStartsWithR = friends.filter(friend => friend.startsWith('R'));
  console.log(nameStartsWithR);//[Ross Geller,Rachel Green]
`

const map = `Створюємо новий масив, проходячись по кожному елементу і змініючи його за умовою, яка нас задовольняє. 
Наприклад в мене є масив з назвами обласних центрів. Я хочу зробити новий масив, де всі ці міста будуть написані великими літерами:

  const ukrainianCities = ['Київ', 'Львів', 'Харків', 'Одеса', 'Дніпро', 'Запоріжжя', 'Івано-Франківськ', 'Тернопіль', 'Чернівці', 'Вінниця', 'Полтава', 'Суми', 'Чернігів', 'Черкаси', 'Хмельницький', 'Рівне', 'Житомир', 'Ужгород', 'Луцьк', 'Миколаїв', 'Херсон', 'Донецьк', 'Луганськ', 'Кропивницький', 'Сімферополь'];
const upperCaseCities = ukrainianCities.map(city => city.toUpperCase());
console.log(upperCaseCities); //['КИЇВ', 'ЛЬВІВ', 'ХАРКІВ', 'ОДЕСА', 'ДНІПРО', 'ЗАПОРІЖЖЯ', 'ІВАНО-ФРАНКІВСЬК', 'ТЕРНОПІЛЬ', 'ЧЕРНІВЦІ', 'ВІННИЦЯ', 'ПОЛТАВА', 'СУМИ', 'ЧЕРНІГІВ', 'ЧЕРКАСИ', 'ХМЕЛЬНИЦЬКИЙ', 'РІВНЕ', 'ЖИТОМИР', 'УЖГОРОД', 'ЛУЦЬК', 'МИКОЛАЇВ', 'ХЕРСОН', 'ДОНЕЦЬК', 'ЛУГАНСЬК', 'КРОПИВНИЦЬКИЙ', 'СІМФЕРОПОЛЬ']

  const biggestCities = ['Київ', 'Харків', 'Одеса', 'Дніпро', 'Донецьк'];
  const overMillionPopulation = biggestCities.map(city => city + ' - має населення більше 1-го мільйона');
  console.log(overMillionPopulation);//Київ - має населення більше 1-го мільйона,Харків - має населення більше 1-го мільйона,Одеса - має населення більше 1-го мільйона,Дніпро - має населення більше 1-го мільйона,Донецьк - має населення більше 1-го мільйона
`

const arrPlayground = `const str = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
  const arr1 = str.split(', ');
  console.log(arr1); //  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  
  const arr2 = arr1.join('~*~');
  console.log(arr2); // Monday~*~Tuesday~*~Wednesday~*~Thursday~*~Friday~*~Saturday~*~Sunday

  const arr3 = arr1.slice(0, 5);
  console.log(arr3); //Monday,Tuesday,Wednesday,Thursday,Friday

  const arr4 = [].concat(arr3, ['Saturday', 'Sunday']);
  console.log(arr4); //Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday

  const arr5 = arr1.indexOf('Friday');
  console.log(arr5); //4

  const arr6 = arr1.at(2);
  console.log(arr6); //Wednesday

  const arr7 = arr1.includes('Sunday');
  console.log(arr7); //true

  const arr8 = arr1.splice(1, 2);
  console.log(arr8);// Tuesday,Wednesday

  const arr9 = arr8.unshift('MONDAY');
  console.log(arr9);//3

  const arr10 = arr1.shift();
  console.log(arr10);//Monday

  const arr11 = arr1.pop();
  console.log(arr11);//Sunday

  const arr12 = arr4.push('Monday');
  console.log(arr12);//8

  const arr13 = arr1.filter(day => day === 'Friday');
  console.log(arr13);//[Friday]

  const arr14 = arr1.map((day, index) => day.toUpperCase() + ' has an index of ' + index);
console.log(arr14); //THURSDAY has an index of 0,FRIDAY has an index of 1,SATURDAY has an index of 2

`

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
            <li><a className={s.link} href="#at">at()</a></li>
            <li><a className={s.link} href="#shift">shift() / unshift()</a></li>
            <li><a className={s.link} href="#splice">splice()</a></li>
            <li><a className={s.link} href="#filter">filter()</a></li>
            <li><a className={s.link} href="#map">map()</a></li>
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
          <h3 id='at'>at()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{at}</SyntaxHighlighter>
          <h3 id='push'>push()/pop()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{push}</SyntaxHighlighter>
          <h3 id='shift'>shift()/unshift()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{shift}</SyntaxHighlighter>
          <h3 id='splice'>splice()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{splice}</SyntaxHighlighter>
          <h2>Методи які працюють через функцію</h2>
          <h3 id='filter'>filter()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{filter}</SyntaxHighlighter>
          <h3 id='map'>map()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{map}</SyntaxHighlighter>
          <p>А тепер, маючи арсенал найбільш використовуваних методів, давайте пограємось, застосовуючи методи до одного й того самого масиву. Для початку масива в нас немає, а є рядок з днями тижня. Простий список, давайте перетворимо його на масив і трохи побавимось.</p>
          <SyntaxHighlighter language="jsx" style={dracula}>{arrPlayground}</SyntaxHighlighter>
        </div>
           <Task problem='Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.'
          solution={`const values = '8 11';
const numbers = values.split(' ');
const width = +numbers[0];
const height = +numbers[1];
const area = width * height;
console.log(area);`}></Task>

        <Task
            problem=' Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу.
Скрипт повинен працювати для будь-якого рядка.'
          solution={`const string = 'Welcome to the future';
const result = string.split(' ').slice(1, -1).join(' ').trim();
console.log(result);`}></Task>
        <Task
            problem=''
          solution={``}></Task>
     </div>
      

    </div>
  )
}

export default Methods