import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn'; 
import Task from '../../components/Task/Task';

const BasicStatements:React.FC = () => {
  return (
    <div className='container'>
      <GoHomeBtn />
      <div>
        <h2>Задачі</h2>
        <Task problem='Використовуючи функцію if...else, напишіть код, який запитуватиме: "Яка офіційна назва JavaScript?"
 Якщо користувач вводить "ECMAScript", то показати через alert: "Вірно!" інакше відобразити:"Не знаєте? ECMAScript!"'
          solution={`const answer = prompt("Яка офіційна назва JavaScript?").trim();
console.log(answer);
const RIGHT_ANSWER = "ECMAScript";
if(answer === RIGHT_ANSWER) {
  alert("Вірно!")} else {
alert("Не знаєте? ECMAScript!")};`}></Task>
        
        <Task problem='' solution={``}></Task>
        <Task problem='' solution={``}></Task>
        <Task problem='' solution={``}></Task>
        <Task problem='' solution={``}></Task>
    </div>
    </div>
  )
}

export default BasicStatements