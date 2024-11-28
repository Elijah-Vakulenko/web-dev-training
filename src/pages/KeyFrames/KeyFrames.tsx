import React from 'react'
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import s from './KeyFrames.module.css'

const key = ``;

const KeyFrames: React.FC = () => {
    return (
      
<>
    <GoHomeBtn />
        <div className={s.paragrph}>
            <h2>@keyFrame</h2>
            <SyntaxHighlighter language="jsx" style={dracula}>{key}</SyntaxHighlighter>
        </div>
</>
  )
}

export default KeyFrames