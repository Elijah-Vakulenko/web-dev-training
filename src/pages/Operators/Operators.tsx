import React from 'react'
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';

const Operators: React.FC = () => {
  return (
    <div className='container'>
          <GoHomeBtn />
          <h3>Логічні оператори</h3>
          <ul>
            <li><h4>&&</h4></li>
            <li><h4>||</h4></li>
            <li><h4>!</h4></li>
          </ul>
    </div>
  )
}

export default Operators