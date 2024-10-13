import React from 'react'
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import girl from '../../../public/img/girl-in-the-train.jpg'
// import coffee from '../../../public/img/coffee.jpg'
// import lumineers from '../../../public/img/lumineers.jpg'
import clsx from "clsx";
import s from './Img.module.css'

// const images = [
//   {
//     url: girl,
//     description: 'girl in the train',
//   },
//   {
//     url: lumineers,
//     description: 'sleep on the floor',
//   },
//   {
//     url: coffee,
//     description: 'a mug of coffee',
//     },
// ]

const Img: React.FC = () => {
  return (
    <div className='container'>
          <GoHomeBtn />

          <div>
              <h2 className="title">Image filters</h2>
            <div className={s.gridy}>
                  <img className={clsx(s.img)} src="{girl}" alt="girl" ></img>
                  <SyntaxHighlighter language="jsx" style={dracula}>{`Original Image`}</SyntaxHighlighter>
                  <img className={clsx(s.img, s.hue)} src="../../../public/img/girl-in-the-train.jpg" alt="girl" ></img>
                  <SyntaxHighlighter language="jsx" style={dracula}>{`.hue {
      filter: hue-rotate(90deg);
    }`}</SyntaxHighlighter>
                  <img className={clsx(s.img, s.blur)} src="../../../public/img/girl-in-the-train.jpg" alt="girl" ></img>
                      <SyntaxHighlighter language="jsx" style={dracula}>{`.blur {
      filter: blur(2px);
    }`}</SyntaxHighlighter>
                  <img className={clsx(s.img, s.sepia)} src="../../../public/img/girl-in-the-train.jpg" alt="girl" ></img>
                    <SyntaxHighlighter language="jsx" style={dracula}>{`.sepia {
      filter: sepia(100%);
    }
    `}</SyntaxHighlighter>
                  <img className={clsx(s.img, s.grayscale)} src="../../../public/img/girl-in-the-train.jpg" alt="girl" ></img>
                    <SyntaxHighlighter language="jsx" style={dracula}>{`.grayscale {
      filter: grayscale(100%);
    }`}</SyntaxHighlighter>
                  <img className={clsx(s.img, s.brightness)} src="../../../public/img/girl-in-the-train.jpg" alt="girl" ></img>
                    <SyntaxHighlighter language="jsx" style={dracula}>{`.brightness {
      filter: brightness(200%);
    }`}</SyntaxHighlighter>
                  <img className={clsx(s.img, s.invert)} src="../../../public/img/girl-in-the-train.jpg" alt="girl" ></img>
                    <SyntaxHighlighter language="jsx" style={dracula}>{`.invert {
      filter: invert(100%);
    }`}</SyntaxHighlighter>
                  <img className={clsx(s.img, s.opacity)} src="../../../public/img/girl-in-the-train.jpg" alt="girl" ></img>
                    <SyntaxHighlighter language="jsx" style={dracula}>{`.opacity {
      filter: opacity(50%);
    }`}</SyntaxHighlighter>
            </div>
          </div>
    </div>
  )
}

export default Img