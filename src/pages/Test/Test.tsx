import React from 'react'
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';

const Test: React.FC = () => {

//------------------------------------------------------------------------------------

  const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
console.table(planets);
const lastIndex = planets.length -1;


for (let i = 0; i <= lastIndex; i += 1){
console.log(planets[i]);
}
  //-----------------------------------------------------------------------------------
  
const num:number = 3.1415926;

console.log(num.toFixed(2));

//-----------------------------------------------------------------------------------


    return (
      <div className='container'>
          <div className='center'><GoHomeBtn /></div>

        <div className='card'>JavaScript Testing Page</div>
  </div>
  )
}

export default Test