import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import s from './Methods.module.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


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


const slice = ``
const lowerUpper = ``
const includes = ``
const startsEnds = ``
const indOf = ``
const trim = ``







const Methods: React.FC = () => {





  return (
     <div className='container'>
      <GoHomeBtn />
     <div className={s.wrapper}>
        <div className='input'>
          <h3>Перетворення у рядок</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{str}</SyntaxHighlighter>
        </div>
        <div className='input'>
          <h3>Перетворення у число</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{num}</SyntaxHighlighter>
          <h3>методи parseInt / parseFloat</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{strToNum}</SyntaxHighlighter>
        </div>
        <div className='input'>
          <h3>Math</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{math}</SyntaxHighlighter>
        </div>
        <div className='input'>
          <h3>Заміна значень - replace()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{repl}</SyntaxHighlighter>
        </div>
        <div className='input'>
          <h3>Кількість знаків після коми - toFixed()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{fix}</SyntaxHighlighter>
        </div>

        <div className='input'>
          <h2>Методи рядків</h2>
          <h3>slice()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{slice}</SyntaxHighlighter>
          <h3>toLowerCase() / toUpperCase()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{lowerUpper}</SyntaxHighlighter>
          <h3>includes()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{includes}</SyntaxHighlighter>
          <h3>indexOf()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{indOf}</SyntaxHighlighter>
          <h3>startsWith() / endsWith()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{startsEnds}</SyntaxHighlighter>
          <h3>trim()</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{trim}</SyntaxHighlighter>
        </div>
     </div>
      

    </div>
  )
}

export default Methods