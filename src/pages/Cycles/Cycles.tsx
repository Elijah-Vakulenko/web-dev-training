
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import Task from '../../components/Task/Task';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const forCycle = `for( let i = 0; i >= 10; i += 0 ){
console.log('simple counter')
}`;


const Cycles:React.FC = () => { 
  return (
    <div className='container'>
      <GoHomeBtn />
      <div>
        <h2 className='title'>Цикл for</h2>
     <p className='description'>
          Використовуємо, коли відома кількість повторень циклу.<br/>
          Структура: for( 1 ; 2 ; 3 )

          
     </p>
<ul>
  <li>1. Початкове значення змінної - зазвичай назва змінної "i" тобто ітерація</li>
         <li> 2. Умова до якої буде виконуватися цикл / кінцеве значення  - результат умови це завжди булеве значення true / false</li>
          <li>3. Пост-умова - в пост-умові замість i+=1 використовуємо інкремент чи дикремент i++ i--</li>
          <li>В фігурних дужках прописуємо логіку того що має вібуватися за кожної ітерації</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={dracula}>
           {forCycle}
          </SyntaxHighlighter>
      </div>
       <div>
        <h2 className='title'>while(){}</h2>
    
      </div>
      <div>
      <h2 className='title'>do{}while()</h2>
    
      </div>
      <div>
      <h2 className='title'>Задачі на тренування циклів</h2>
    <Task problem='' solution={``}></Task>
    <Task problem='' solution={``}></Task>
    <Task problem='' solution={``}></Task>
      </div>

    </div>
  )
}

export default Cycles