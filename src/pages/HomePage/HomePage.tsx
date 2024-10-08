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


const HomePage = () => {
  return (
    <div>
      <div className={s.nav}>
  <a className={s.navItem} href="#1">    <FaHtml5 className={s.icon} style={{color:'tomato'} }/>  </a>
  <a className={s.navItem} href="#2">    <IoLogoCss3 className={s.icon} style={{color:'royalblue'} }/></a>
  <a className={s.navItem} href="#3">    <SiJavascript className={s.icon} style={{color:'yellow'} }/></a>
  <a className={s.navItem} href="#4">    <FaReact className={s.icon} style={{color:'aquamarine'} } /></a>
  <a className={s.navItem} href="#5">    <SiTypescript className={s.icon} style={{color:'goldenrod'} }/></a>
  <a className={s.navItem} href="#6">    <FaNodeJs className={s.icon} style={{color:'green'} }/></a>
          </div>
      <div className='container'>
        
        <div className='center'>
          <Link to="/test">
            <button className='btn'>TEST PAGE</button>
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