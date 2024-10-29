import React from 'react'
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Test: React.FC = () => {
  
  const task = ``
    
//  Напишіть програму, яка отримає від користувача число(кількість хвилин) та виведе в консоль рядок у форматі годин та хвилин. Наприклад 70 === 01:10.

  const userNumber = prompt('Введіть своє число').trim();
  console.log(userNumber);

  const hours = String(Math.floor(userNumber / 60)).padStart(2, '0');
  //↑ переводимо у рядок, округлюємо, ділимо введене число на 60
  const minutes = String(userNumber % 60).padStart(2, '0');
    //↑ переводимо у рядок, визначаємо залишок від ділення на 60 для введеного числа
  const convertedTime = `${hours}:${minutes}`;
  console.log(convertedTime);
// Додатково ↓
  if (userNumber < 5999) {
    alert(convertedTime);
  } else if (isNaN(userNumber) || userNumber === '') {
    alert('you should type a number')
  } else {
    alert('Your Number is too big. The program has a deal only with hours and minutes in a 00:00 format.')
  }



    return (
      <div className='container'>
          <div className='center'><GoHomeBtn /></div>

        <div className='card'>JavaScript Testing Page</div>
        <SyntaxHighlighter language="jsx" style={dracula}>
        {task}
        </SyntaxHighlighter>

  </div>
  )
}

export default Test