import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import s from './Arrays.module.css'

const arr = `
const borsh = ['potato', 'beetroot', 
'carrot', 'onion', 'chicken', 
'pork', 'seasonings', 'salt', 
'sour cream', 'water', 'beans', 
'cabbage', 'spring onion']

console.table(borsh)
//В консолі побачимо таку табличку →
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
      <h2>Arrays / Масиви</h2>
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
