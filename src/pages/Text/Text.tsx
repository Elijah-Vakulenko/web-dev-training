import React from 'react'
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


const textTypes = `<b>Bold / Жирний текст</b>
<i>Italic / Курсив</i>
<s>Striked text / Перекреслений текст</s>
<mark>Marked text / Виділений текст</mark>
<u>Underline / Підкреслений текст</u>
<abbr title="United States of America">USA (Абревіатура)</abbr>
<details>
 <summary>Text / Текст який потребує пояснення</summary>
 <p>Details / Додаткові деталі</p>
</details>
<q>Quote / Цитата</q>
<small>Smaller text / Меньший текст</small>
<p>Subscripted text / Підрядковий текст -  H<sub>2</sub>O</p>
<p>Superscripted text / Надрядковий текст - 2 м<sup>2</sup></p>
`

const Text: React.FC = () => {
  return (
   <div className='container'>
          <GoHomeBtn />

          <h2 className='title'>Текстове оформлення за допомогою тегів</h2>

          <p className='description'>Існує ряд тегів, який допомагає стилізувати текст без участі CSS. Загалом це архаїчні елементи, використання яких стало  не доцільним та не рекомендованим за появи та розвитку каскадних таблиць стилів - CSS.</p>

        <div style={{display: 'flex', gap: 20}}>
             <div style={{display: "flex", flexDirection : 'column', gap: 19}}>
                  <b>Bold / Жирний текст</b>
                  <i>Italic / Курсив</i>
                  <s>Striked text / Перекреслений текст</s>
                  <mark>Marked text / Виділений текст</mark>
                  <u>Underline / Підкреслений текст</u>
                  <abbr title="United States of America">USA (Абревіатура)</abbr>
                  <details>
                      <summary>Text / Текст який потребує пояснення</summary>
                      <p>Details / Додаткові деталі</p>
                  </details>
                  <q>Quote / Цитата</q>
                  <small>Smaller text / Меньший текст</small>
                  <p>Subscripted text / Підрядковий текст -  H<sub>2</sub>O</p>
                  <p>Superscripted text / Надрядковий текст - 2 м<sup>2</sup></p>
             </div>
    
          <SyntaxHighlighter language="html" style={dracula}>{textTypes}</SyntaxHighlighter>
        </div>
   </div>
  )
}

export default Text