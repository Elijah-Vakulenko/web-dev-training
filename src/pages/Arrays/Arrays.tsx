import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import s from './Arrays.module.css'
import React, { useState } from 'react';

const arr = `
const borsh = ['potato', 'beetroot', 
'carrot', 'onion', 'chicken', 
'pork', 'seasonings', 'salt', 
'sour cream', 'tap water', 'beans', 
'cabbage', 'spring onion'];

//Дістаємо значення елементк масиву за його індексом:
console.log(borsh[0]); //'potato'

//Перевизначення елементу:
borsh[9] = water;

console.table(borsh)
//В консолі побачимо таку табличку →
`

const arr2 = `const friends = ['Ross Geller', 'Rachel Green', 
'Chandler Bing', 'Monica Geller', 'Joey Tribbiani', 'Phoebe Buffay'];

console.log(friends.length) //6

//Індекс останнього елемента:
console.log(friends.length - 1) //5
console.log(friends[5]) //'Phoebe Buffay'


//Додавання елементу:
friends[6] = 'Mike';
console.log(friends); 
//'Ross Geller', 'Rachel Green', 'Chandler Bing', 'Monica Geller', 'Joey Tribbiani', 'Phoebe Buffay', 'Mike'

//Видалення елементу:
delete friends[6];

`

const arrays=`const countries = ['Ukraine', 'France', 'USA', 'Japan', 'Germany', 'Italy', 'Spain', 'China', 'Canada', 'England', 'Mexico', 'Australia', 'Brazil', 'Switzerland'];
const colors = ['🟣', '🟢', '🔴', '🔵', '🟠', '🟡', '🟤', '⚪', '⚫'];
const animals = ['🐝', '🦊', '🦝', '🐴', '🐺', '🐦', '🦁', '🐱', '🐇', '🐸', '🕊️', '🐬', '🦓', '🦜', '🐞', '🐯', '🐕'];
const fruits = ['🍒', '🍇', '🍌', '🍉', '🍏', '🍍', '🥝', '🍊', '🍓'];
const artists = ['Vincent van Gogh', 'Pablo Picasso', 'Claude Monet', 'Rembrandt', 'Leonardo da Vinci', 'Paul Cezanne', 'Gustav Klimt', 'Pierre-Auguste Renoir', 'Peter Paul Rubens', 'Ivan Aivazovsky', 'Salvador Dali', 'Taras Shevchenko', 'William Turner', 'Edvard Munch', 'Ivan Shishkin', ];
const theBeatles = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
const friends = ['Ross Geller', 'Rachel Green', 'Chandler Bing', 'Monica Geller', 'Joey Tribbiani', 'Phoebe Buffay'];
const fiboNumbers = [2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const notes = ['c', '#c', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#'];
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const colorNames = ['purple', 'green', 'red', 'blue', 'orange', 'yellow', 'brown', 'white', 'pink', 'black', 'grey'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const zodiacs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const hpCharacters = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore', 'Severus Snape', 'Lord Voldemort', 'Minerva McGonagall', 'Rubeus Hagrid', 'Sirius Black'];
const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
const oceans = ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Southern Ocean', 'Arctic Ocean'];
const cars = ['Toyota', 'Volkswagen', 'Honda', 'Ford', 'Peugeot', 'Volvo', 'Opel', 'Mercedes-Benz', 'Dodge', 'BMW', 'Chevrolet', 'Porsche', 'Nissan', 'Mitsubishi', 'Audi'];
`

const Arrays: React.FC = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleSolution = () => {
    setIsOpen(!isOpen);
  };

  const script1 = `
const cart = [54, 28, 185, 78, 92, 17, 120];
let total = 0;
for (let i = 0; i < cart.length; i += 1) {
  total += cart[i];
}
console.log("Total:", total);
`;

  const script2 = `
const cart = [54, 28, 92, 17];
let total = 0;
for (const item of cart) {
  total += item;
}
console.log("Total:", total);
`;

  const borsh = ['potato', 'beetroot', 'carrot', 'onion', 'chicken',
    'pork', 'seasonings', 'salt', 'sour cream', 'water', 'beans',
    'cabbage', 'spring onion'];
  
  return (
    <div className="container">
      <GoHomeBtn />
      <h2 className='title'>Arrays / Масиви</h2>
      <p className='description'> Масиви це складні типи даних. Значення масиву мають свою нумерацію, яка називається індексом. Нумерація починається з нуля. Тобто перший елемент масиву має індекс [0]. </p>

<div className={s.table}>
  <SyntaxHighlighter language="jsx" style={dracula}>{arr}</SyntaxHighlighter>
  <table>
          <thead>
            <tr>
              <th>(index)</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {borsh.map((value, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td style={{color : 'tomato'}}>'{value}'</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Довжину масиву для різних операцій дістаємо за допомогою властивості 'length'.</p>
      <SyntaxHighlighter language="jsx" style={dracula}>{arr2}</SyntaxHighlighter>
      <button className='btn' onClick={toggleSolution}>
   Цікаві колекції масивів для практики
      </button>
      {isOpen && <SyntaxHighlighter language="jsx" style={dracula}>{arrays}</SyntaxHighlighter>}
      <div className="task">
        <div>
          <h3>Script 1</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{script1}</SyntaxHighlighter>
        </div>
      </div>

      <div className="task">
        <div>
          <h3>Script 2</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{script2}</SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Arrays;
