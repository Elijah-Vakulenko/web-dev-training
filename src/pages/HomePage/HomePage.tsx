import HTML from '../../components/HTML/HTML';
import CSS from '../../components/CSS/CSS';
import JavaScript from '../../components/JavaScript/JavaScript';
import ReactJS from '../../components/ReactJS/ReactJS';
import TypeScript from '../../components/TypeScript/TypeScript';
import NodeJS from '../../components/NodeJS/NodeJS';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='container'>
      <div className='center'>
        <Link to="/test">
          <button className='btn'>TEST PAGE</button>
        </Link>
      </div>
      <div className="wrapper">
        <HTML />
        <CSS />
        <JavaScript />
        <ReactJS />
        <TypeScript/>
        <NodeJS/>
      </div>
    </div>
  );
}

export default HomePage;