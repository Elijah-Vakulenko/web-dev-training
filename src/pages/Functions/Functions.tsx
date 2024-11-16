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

  const bmi = `Функція розрахунку індексу маси тіла
  const bmi = calcBMI('88,3', '1.75'); // викликаємо функцію з переданими аргументами

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

↓ Напишемо функцію, яка буде вираховувати середне арифметичне з переданих значень. 

function calAverage() {
const args = Array.from(arguments);// ← створюємо масив з переданих значень.
let avg = 0; // ← створюємо змінну для розрахунку суми.

for (const item of args) {
  avg += item;
}
return avg / args.length; // Отриману суму ділимо на довжину масиву, тобто кількість елементів.
}
console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

↓ А тепер напишемо функцію, яка створе з отриманих значень масив з числами більше за нуль.
function getPositiveArr() {
   const args = Array.from(arguments);
   const result = [];
   for (const num of args) {
     if (num > 0) {
       result.push(num);
     }
   }
   return result;
 }
 const arr1 = getPositiveArr(-1, 3, -5, 3, 4, 6, -2, -4, -7);

 console.log(arr1);

`
  return (
    <div className='container'>
      <GoHomeBtn />
      <h1>Функції</h1>
        <p></p>
      <SyntaxHighlighter language="jsx" style={dracula}>{structure}</SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={dracula}>{bmi}</SyntaxHighlighter>
      <h2>Псевдомасив → масив</h2>
      <p>  Під капотом, всі аргументи функції зберігаються у псевдомасив під назвою arguments. Навідміну від звичайного масиву, псевдомасив має обмежені можливості. Тому його можна перетворити на звичайний масив, щоб мати змогу використовувати весь арсенал методів та маніпулювати значеннями для вирішення наших задач.</p>
      <SyntaxHighlighter language="jsx" style={dracula}>{arg}</SyntaxHighlighter>
        <Task
          problem='Напишіть функцію яка приймає першим параметром мінімальне значення. Та довільну кількість аргументів. Потрібно повернути масив лише тих аргументів які більші за мінімальне значення'
          solution={`function getArr() {
const args = Array.from(arguments);
const result = [];
const min = args.shift(); 
  for (const num of args) {
    if (num >= min) {
      result.push(num);
    }
  }
    console.log(result); //3,4,5,6,7,8,9,10,11
}
getArr(3, 1, 2, 3, 4, 6, 7, 2, 1, 2, 3, 4); 

або

function getArr(){
const args = Array.from(arguments);
const result = [];
const min = args[0];
  for(i = 1; i < args.length; i++){
    if(i >= min){
      result.push(i);
    }
  }
console.log(result);//7,8,9,10,11,12,13
}
getArr(7, 74, 4, 1,8, 1, 2, 5, 1, 6, 9, 17, 5, 24);
`}>
      </Task>
      <Task
          problem='Напиши функцію printInfo(names, phones) яка виводить у консоль ім"я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.'
          solution={`function printInfo(names, phones) {
names = names.split(',');
phones = phones.split(',');
  for (let i = 0; i < names.length; i++) {
    console.log(\`\${names[i]} - \${phones[i]}\`);
      //Julia Roberts - 89001234567
      //Tom Hanks - 89001112233
      //Meg Ryan - 890055566377
      //Jim Carrey - 890055566300
  };
};

printInfo('Julia Roberts,Tom Hanks,Meg Ryan,Jim Carrey',
'89001234567,89001112233,890055566377,890055566300');`}>
        </Task>
         <Task
          problem='Напиши функцію formatTime(totalMinutes) яка переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM. formatTime(70); formatTime(450); formatTime(1441);'
          solution={`function formatTime(totalMinutes) {
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

const result = \`\${hours.toString().padStart(2, '0')}:\${minutes.toString().padStart(2, '0')}\`;

   return result;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"`}>
        </Task>
         <Task
          problem='Напишіть функцію fillArray, яка б приймала мінімальне й максимальне значення. Функція має повертати масив з числами від мінімального до максимального через один.'
          solution={`function fillArray(min, max) {
   const arr = [];
   for (let i = min; i <= max; i += 2) {
     arr.push(i);
   }
   return arr;
 }
 const myArr1 = fillArray(20, 50);//20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50
 const myArr1 = fillArray(9, 21);//9,11,13,15,17,19,21

 console.log(myArr1);`}>
        </Task>
         <Task
          problem='Напишіть функцію яка б повертала рядок кожна літера якого у зворотньому порядку'
          solution={`function showReverseString(string) {
let newString ='';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
console.log(newString);
}

showReverseString('JavaScript');//tpircSavaJ
showReverseString('windows');//swodniw`}>
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