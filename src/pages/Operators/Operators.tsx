import React from 'react'
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism';

const and = `

`
const or = `

`
const not = `

`

const Operators: React.FC = () => {
  return (
    <div className='container'>
          <GoHomeBtn />
          <h3>Логічні оператори</h3>
          <ul>
              <li><h4>&&</h4>
                  <p></p>
                  <div className="input"><SyntaxHighlighter language="jsx" style={dracula}>{and}</SyntaxHighlighter>
                  </div></li>
              <li><h4>||</h4>
                  <p></p>
                  <div className="input"><SyntaxHighlighter language="jsx" style={dracula}>{or}</SyntaxHighlighter>
                  </div></li>
              <li><h4>!</h4>
                  <p></p>
                  <div className="input"><SyntaxHighlighter language="jsx" style={dracula}>{not}</SyntaxHighlighter>
                  </div></li>

          </ul>
    </div>
  )
}

export default Operators