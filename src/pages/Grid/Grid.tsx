import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import s from './Grid.module.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import clsx from "clsx";
import React, { useState } from 'react';

const siteCSS = `
.header {
  background-color: var(--pink);
  grid-area: header; /*← до кожної секції прив'язуємо Id area*/
}

.sidebar {
  grid-area: sidebar;
  background-color: var(--wine);
  align-self: start;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.content {
  grid-area: content;
  background-color: tomato;
}

.footer {
  grid-area: footer;
  background-color: var(--retro);
}
`

const siteHTML = `
<div className="site">
  <div className="header">HEADER</div>
  <div className="sidebar">SIDEBAR</div>
  <div className="content">CONTENT</div>
  <div className="footer">FOOTER</div>
</div>





.site {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 150px 1fr;
  /*↓ Тут ми робимо розмітку наших секцій*/
  grid-template-areas: 
    "header header"
    "sidebar content"
    "footer footer";
  grid-gap: 2px;
}
`

const puzzleCSS = `
.pazzle {
  display: grid;
  /*↓ Сітка складається з 3х стовпців однакової фракції*/
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 10px;
}

.box_1 {
  background-color: var(--pink);
  grid-row: 1/3;
}
.box_2 {
  background-color: var(--wine);
  grid-column: 2/4;
}
.box_3 {
  background-color: var(--retro);
}
.box_4 {
  background-color: tomato;
  grid-column: 3;
  grid-row: 2/4;
}
`
const puzzleCSS2 = `
.box_5 {
  background-color: var(--darkgreen);
  grid-column: 1/3;
}
.box_6 {
  background-color: var(--beige);
}
.box_7 {
  background-color: var(--ohre);
  grid-column: 2/4;
}
.box_8 {
  background-color: var(--surfgreen);
  grid-column: 1/3;
}
.box_9 {
  background-color: var(--gray);
}
`

const Grid: React.FC = () => {

  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

  const boxTexts = [
    'grid-row: 1/3 - займає рядки від 1го до 3го тобто 1й і 2й',
    ' grid-column: 2/4; - займає стовпчики від 2го до 4го, тобто 2й та 3й',
    'Без змін, але фактично стоїть на місці  grid-column: 2/3 та grid-row: 2/3;',
    'BOX 4 займає рядки від 4го до 6го',
    'BOX 5 займає рядки від 5го до 7го',
    'BOX 6 займає рядки від 6го до 8го',
    'BOX 7 займає рядки від 7го до 9го',
    'BOX 8 займає рядки від 8го до 10го',
    'BOX 9 займає рядки від 9го до 11го',
  ];

  const handleMouseEnter = (boxNumber: number) => {
    setHoveredBox(boxNumber);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };
  return (
    <div className='container'>
      <GoHomeBtn />
    
      <div>
        <h2 className='title'>Site Structure</h2>
        <p className='description'>Можемо розділити сітку на логічні сегменти. Наприклад зробити типову розмітку сайту за функціональним зонуванням: хедер, сайдбар, контент та футер.</p>
        <div className={s.site}>
          <div className={clsx(s.commonSite, s.header)}>HEADER</div>
          <div className={clsx(s.commonSite, s.sidebar)}>SIDEBAR</div>
          <div className={clsx(s.commonSite, s.content)}>CONTENT</div>
          <div className={clsx(s.commonSite, s.footer)}>FOOTER</div>
        </div>
        <div className={s.codeReview}>
          <SyntaxHighlighter language="jsx" style={dracula}>
           {siteHTML}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx" style={dracula}>
           {siteCSS}
          </SyntaxHighlighter>
        </div>
      </div>
      <div>
         <h2 style={{ marginBottom: 25 }}>Puzzle</h2>
        <p style={{ marginBottom: 25 }}>
          Маємо 9 блоків. Побудуємо сітку так щоб кожна комірка займала декілька рядків чи стовбчиків.
        </p>
        <div className={s.pazzle}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((boxNumber) => (
            <div
              key={boxNumber}
              className={clsx(s.box, s[`box_${boxNumber}`])}
              onMouseEnter={() => handleMouseEnter(boxNumber)}
              onMouseLeave={handleMouseLeave}
            >
              {hoveredBox === boxNumber ? boxTexts[boxNumber - 1] : `Box ${boxNumber}`}
            </div>
          ))}
        </div>
 <div style={{display: 'flex', gap: 10}}>
          <SyntaxHighlighter className={s.codeRew2} language="jsx" style={dracula}>
             {puzzleCSS}
            </SyntaxHighlighter>
          <SyntaxHighlighter className={s.codeRew2} language="jsx" style={dracula}>
             {puzzleCSS2}
            </SyntaxHighlighter>
 </div>
      </div>
    </div>
  )
}

export default Grid