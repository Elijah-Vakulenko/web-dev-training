import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';

const str = `
const x = 10;

String(x) // ← перетворення у рядок
x.toString() // ← перетворення у рядок
`

const Methods: React.FC = () => {





  return (
     <div className='container'>
      <GoHomeBtn />
      <div className='input'>
        <h3>Перетворення у рядок</h3>
        <pre>{str }</pre>
    </div>
    </div>
  )
}

export default Methods