import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn'; 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Task from '../../components/Task/Task';


const Functions: React.FC = () => {

  const structure = `function НазваФункції(аргумент 1, аргумент 2){
  Тіло функції, те що вона робить
  return Те що функція видасть як результат;
}
//Викликаємо функцію за її назвою, в дужках передаємо значення
НазваФункції(значення аргументу 1, значення аргументу 2)

Наприклад:

function sum(x, y){
const result = x + y;
console.log(result);
return result;
}
sum(56, 20);//76`

  const bmi = `const bmi = calcBMI('88,3', '1.75'); // викликаємо функцію з переданими аргументами

function calcBMI(weight, height){
weight = +weight.replace(',', '.');
height = +height.replace(',', '.');
//↑ використовуючи .replace(',', '.') замінюємо кому на крапку, щоб далі працювати з числами;

const result = weight / height ** 2; // ділимо вагу на зріст у квадраті
return +result.toFixed(1); // в результаті лишаемо одну цифру після коми.
}`
  
  const arg = `function sum(x, y){
const args = Array.from(arguments); //← arguments це зарезервоване слово, тому структура має бути саме така.
console.log(args) //56,20,19,9,23
}
sum(56, 20, 19, 9, 23);
`

  return (
    <div className='container'>
      <GoHomeBtn />
      <h1>Функції</h1>
        <p></p>
      <SyntaxHighlighter language="jsx" style={dracula}>{structure}</SyntaxHighlighter>
      <h2>Псевдомасив → масив</h2>
      <p>  Під капотом, всі аргументи функції зберігаються у псевдомасив під назвою arguments. Навідміну від звичайного масиву, псевдомасив має обмежені можливості. Тому його можна перетворити на звичайний масив, щоб мати змогу використовувати весь арсенал методів та маніпулювати значеннями для вирішення наших задач.</p>
                <SyntaxHighlighter language="jsx" style={dracula}>{arg}</SyntaxHighlighter>
      <h3>Функція розрахунку індексу маси тіла</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{bmi}</SyntaxHighlighter>
         <Task
          problem=''
          solution={``}>
        </Task>
         <Task
          problem=''
          solution={``}>
        </Task>
         <Task
          problem=''
          solution={``}>
        </Task>
         <Task
          problem=''
          solution={``}>
        </Task>
         <Task
          problem=''
          solution={``}>
        </Task>
      <h1>Callback Функції</h1>
         <Task
          problem=''
          solution={``}>
        </Task>
         <Task
          problem=''
          solution={``}>
        </Task>
         <Task
          problem=''
          solution={``}>
        </Task>
         <Task
          problem=''
          solution={``}>
        </Task>
         <Task
          problem=''
          solution={``}>
        </Task>
    </div>
  )
}

export default Functions