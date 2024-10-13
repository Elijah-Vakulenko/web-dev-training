import React from 'react'
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Tags: React.FC = () => {

  const fieldsetTag = `
<fieldset>
  <legend>September 2024</legend>
  <ul class="List">
    <li>Chandler Bing</li>
    <li>Monica Geller</li>
    <li>Ross Geller</li>
    <li>Rachel Green</li>
    <li>Joe Tribbiani</li>
    <li>Phoebe Buffay</li>
  </ul>
</fieldset>
`;

  return (
    <div className='container'>
      <GoHomeBtn />
<h2 className='title'>fieldset + legend</h2>
      <div className='task'>
        <div className="input">
          <div>
            <h3>HTML Code</h3>
            <SyntaxHighlighter language="html" style={dracula}>{fieldsetTag}</SyntaxHighlighter>
          </div>
        </div>
  
        <div className="output">
          <div>
            <h3 style={{marginBottom: 8}}>Rendered HTML</h3>
            <div
              className="rendered-html"
              dangerouslySetInnerHTML={{ __html: fieldsetTag }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Tags