import React from 'react'
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const emmetHTML = `//Створення елементів з вкладеністюю ">" та додавання елементів на той самий рівень вкладеності "+"

div>H2+p

 <div>
    <H2></H2>
    <p></p>
</div>

//Створення однотипних елементів структури з зазначенням кількості "*"

ul>li*3

<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>

//Створення блоку з класом ".":

div.title

<div className="title"></div>

//Створення елементу разом з його заповненням "{}"

 div>h2{Розділ 1}

<div>
    <h2>Розділ 1</h2>
</div>

//Створення елементу з атрибутом "[atribute="name"]":

div>img[alt="lake"][src="/public/img/lake.jpg"]+nav>a[href="https://google.com"]

<div>
    <img src="/public/img/lake.jpg" alt="lake" />
    <nav><a href="https://google.com"></a></nav>
</div>

//Створення елементу з id "#":
div#menu

<div id="menu"></div>

//Створення нумерованих елементів "$" у класах, атрибутах чи назвах
ul>li*3.item$[title='item$']{ITEM$}

<ul>
    <li className="item1" title="item1">ITEM1</li>
    <li className="item2" title="item2">ITEM2</li>
    <li className="item3" title="item3">ITEM3</li>
</ul>

//Створення складної структури з декількома різними елементами вкладення за допомогою "^" (shift+6)

div>h2{Список літератури}+ul>li*3{Джерело номер$}^div>h2{Розділ1}+p{Вечоріло...}

//↑ Тут ми створили блок, всередині помістили заголовок і список, в нього кладемо пункти, а потім ПОВЕРТАЄМОСЯ 
//і на тому ж рівні що і заголовок зі списком, створюємо ще один блок з заголовком та текстом:
<div>
    <h2>Список літератури</h2>
    <ul>
        <li>Джерело номер1</li>
        <li>Джерело номер2</li>
        <li>Джерело номер3</li>
    </ul>
    <div>
        <h2>Розділ1</h2>
        <p>Вечоріло...</p>
    </div>
</div>

//Можна застосовувати одразу декілька "^^" щоб підійматися рівнями вкладеності:
div>h3{Розділ 1}+ul>li^^div>h2{Розділ 2}
<div>
    <h3>Розділ 1</h3>
    <ul>
        <li></li>
    </ul>
</div>
<div>
    <h2>Розділ 2</h2>
</div>


`

const QuickGuide:React.FC = () => {
  return (
     <div className='container'>
          < GoHomeBtn />
          <div>
              <h2 className="title">Швидкий набір структури при розмітці у Еметі</h2>
              <SyntaxHighlighter language="jsx" style={dracula}>{emmetHTML}</SyntaxHighlighter>
          </div>



     </div>
  )
}

export default QuickGuide