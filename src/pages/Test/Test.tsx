import React from 'react'
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Test: React.FC = () => {
  
  const task = ``
    
const borsh = ['potato', 'beetroot', 'carrot', 'onion', 'chicken', 
'pork', 'seasonings', 'salt', 'sour cream', 'water', 'beans', 
'cabbage', 'spring onion']

  console.table(borsh);

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