import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import s from './Grid.module.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import clsx from "clsx";

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

const Grid: React.FC = () => {
  return (
    <div className='container'>
      <GoHomeBtn />
    
      <div>
        <h2 style={{marginBottom:25}}>Site Structure</h2>
        <p style={{ marginBottom: 25 }}>Можемо розділити сітку на логічні сегменти. Наприклад зробити типову розмітку сайту за функціональним зонуванням: хедер, сайдбар, контент та футер.</p>
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
    </div>
  )
}

export default Grid