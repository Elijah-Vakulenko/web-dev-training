import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn'; 
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
          <pre>{bmi}</pre>
      </div>
    </div>
  )
}

export default Functions