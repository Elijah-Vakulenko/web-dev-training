import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn'; 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Functions: React.FC = () => {

  const bmi = `
const bmi = calcBMI('88,3', '1.75'); // викликаємо функцію з переданими аргументами

function calcBMI(weight, height){
weight = +weight.replace(',', '.');
height = +height.replace(',', '.');

// використовуючи .replace(',', '.') замінюємо кому на крапку, щоб далі працювати з числами;

const result = weight / height ** 2; // ділимо вагу на зріст у квадраті
return +result.toFixed(1); // в результаті лишаемо одну цифру після коми.
}
  `

  return (
    <div className='container'>
      <GoHomeBtn />
      <div className='input'>
          <h3>Функція розрахунку індексу маси тіла</h3>
          <SyntaxHighlighter language="jsx" style={dracula}>{bmi}</SyntaxHighlighter>
      </div>
    </div>
  )
}

export default Functions