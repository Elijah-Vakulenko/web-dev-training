import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';

import s from './Font.module.css';


const custom = ``;
const bg = ``;



const Font: React.FC = () => {
  
    return (
      <>
      <  GoHomeBtn />
  
      <div>
        <h2>Custom font</h2>
            <p className={s.font}>Hello World</p>
        <SyntaxHighlighter language="jsx" style={dracula}>{custom}</SyntaxHighlighter>
  
        <h2>Text with a background</h2>
            <p className={s.bg}>WEB DEVELOPMENT</p>
        <SyntaxHighlighter language="jsx" style={dracula}>{bg}</SyntaxHighlighter>
      </div>
      </>
  )
}

export default Font