import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Функция для выполнения первого скрипта
const calculateTotalScript1 = (): string => {
  const cart = [54, 28, 185, 78, 92, 17, 120];
  let total = 0;

  for (let i = 0; i < cart.length; i += 1) {
    total += cart[i];
  }

  return `Total: ${total}`;
};

// Функция для выполнения второго скрипта
const calculateTotalScript2 = (): string => {
  const cart = [54, 28, 92, 17];
  let total = 0;

  for (const item of cart) {
    total += item;
  }

  return `Total: ${total}`;
};

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

  return (
    <div className="container">
      <GoHomeBtn />
      <h2>Arrays / Масиви</h2>

      {/* Первый скрипт */}
      <div className="task">
        <div>
          <h3>Script 1</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{script1}</SyntaxHighlighter>
        </div>
        <div>
          <h3>output Output:</h3>
          <pre className="output">{calculateTotalScript1()}</pre>
        </div>
      </div>

      <div className="task">
        <div>
          <h3>Script 2</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{script2}</SyntaxHighlighter>
        </div>
        <div>
          <h3>output Output:</h3>
          <pre className="output">{calculateTotalScript2()}</pre>
        </div>
      </div>
    </div>
  );
};

export default Arrays;
