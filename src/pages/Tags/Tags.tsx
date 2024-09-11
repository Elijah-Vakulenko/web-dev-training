import React from 'react'
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
const Tags: React.FC = () => {

  const htmlMarkup = `
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
    <div>
      <GoHomeBtn />
<h2>fieldset + legend</h2>
      <div className='task'>
        <div className="input">
          <div>
            <h3>HTML Code</h3>
            <pre className="markup">{htmlMarkup}</pre>
          </div>
        </div>
  
        <div className="output">
          <div>
            <h3>Rendered HTML</h3>
            <div
              className="rendered-html"
              dangerouslySetInnerHTML={{ __html: htmlMarkup }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Tags