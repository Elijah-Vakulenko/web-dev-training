import HTML from '../../components/HTML/HTML';
import CSS from '../../components/CSS/CSS';
import JavaScript from '../../components/JavaScript/JavaScript';
import ReactJS from '../../components/ReactJS/ReactJS';
import TypeScript from '../../components/TypeScript/TypeScript';
import NodeJS from '../../components/NodeJS/NodeJS';
import { Link } from 'react-router-dom';
import s from './HomePage.module.css';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { useEffect } from 'react';

const HomePage = () => {
useEffect(() => {
  const sidebar = document.querySelector(`.${s.nav}`) as HTMLElement | null;
  const container = document.querySelector('.container') as HTMLElement | null;

  const handleScroll = () => {
    if (container && sidebar) {
      const containerTop = container.getBoundingClientRect().top;
      if (containerTop < 0) {
        sidebar.style.top = `${Math.abs(containerTop) + 20}px`; // Регулируйте смещение
      } else {
        sidebar.style.top = '0'; // Исходная позиция
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  
  return (
    <div>
   
      <div className='container'>
           <div className={s.nav}>
  <a className={s.navItem} href="#1">    <FaHtml5 className={s.icon} style={{color:'tomato'} }/>  </a>
  <a className={s.navItem} href="#2">    <IoLogoCss3 className={s.icon} style={{color:'royalblue'} }/></a>
  <a className={s.navItem} href="#3">    <SiJavascript className={s.icon} style={{color:'yellow'} }/></a>
  <a className={s.navItem} href="#4">    <FaReact className={s.icon} style={{color:'aquamarine'} } /></a>
  <a className={s.navItem} href="#5">    <SiTypescript className={s.icon} style={{color:'goldenrod'} }/></a>
  <a className={s.navItem} href="#6">    <FaNodeJs className={s.icon} style={{color:'green'} }/></a>
          </div>
        <div className='center'>
          <Link to="/test">
            <button style={{ marginTop: '65px', marginBottom: '15px'}} className='btn'>TESTING PAGE</button>
          </Link>
        </div>
        <div className={s.layout}>
          <HTML />
          <CSS />
          <JavaScript />
          <ReactJS />
          <TypeScript />
          <NodeJS />
        </div>
      </div>
    </div>
  );
}

export default HomePage;