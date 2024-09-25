import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';

const str = `
const x = 10;

String(x) // ← перетворення у рядок
x.toString() // ← перетворення у рядок
`

const num = `
const y = '10';
Number(y) //← перетворення у число
+y // ← перетворення у число за допомогою унарного плюсу `

const Methods: React.FC = () => {





  return (
     <div className='container'>
      <GoHomeBtn />
     <div className='wrapper'>
        <div className='input'>
          <h3>Перетворення у рядок</h3>
          <pre>{str }</pre>
        </div>
        <div className='input'>
          <h3>Перетворення у число</h3>
          <pre>{num}</pre>
        </div>
     </div>
      

    </div>
  )
}

export default Methods