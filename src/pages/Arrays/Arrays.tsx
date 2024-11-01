import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import s from './Arrays.module.css'

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
'Chandler Bing', 'Monica Geller', 'Joe Tribiani', 'Phoebe Buffey'];

console.log(friends.length) //6

//Індекс останнього елемента:
console.log(friends.length - 1) //5
console.log(friends[5]) //'Phoebe Buffey'


//Додавання елементу:
friends[6] = 'Mike';
console.log(friends); 
//'Ross Geller', 'Rachel Green', 'Chandler Bing', 'Monica Geller', 'Joe Tribiani', 'Phoebe Buffey', 'Mike'

//Видалення елементу:
delete friends[6];

`


const Arrays: React.FC = () => {
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
