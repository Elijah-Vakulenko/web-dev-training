import React from 'react'
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';

const Test: React.FC = () => {

//------------------------------------------------------------------------------------
  const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
planets.splice(2, 1, 'Terra Nova');
  console.log(planets);//Mercury,Venus,Terra Nova,Mars,Jupiter,Saturn,Uranus,Neptune
  
    return (
      <div className='container'>
          <div className='center'><GoHomeBtn /></div>

        <div className='card'>JavaScript Testing Page</div>
  </div>
  )
}

export default Test