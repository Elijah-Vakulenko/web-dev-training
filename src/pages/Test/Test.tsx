import React from 'react'
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';

const Test: React.FC = () => {

//------------------------------------------------------------------------------------

//   const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
// console.table(planets);
// const lastIndex = planets.length -1;


// for (let i = 0; i <= lastIndex; i += 1){
// console.log(planets[i]);
// }
//   //-----------------------------------------------------------------------------------
  
// const num:number = 3.1415926;

// console.log(num.toFixed(2));

//-----------------------------------------------------------------------------------
let weather: string = 'rainy';

  console.log(weather);

  function weatherChecker() {
    if (weather === 'sunny') console.log('Don\'t forget your sunglasses');
  else if (weather === 'rainy') console.log('Grab your raincoat');
  else if (weather === 'windy') console.log('You should wear a scarf');
  else console.log('The weather is awesome today! Have fun!')
  }
  
  weatherChecker();

  weather = 'sunny';
  console.log(weather);
  weatherChecker();

  weather = 'cloudy';
  console.log(weather);
  weatherChecker();

  let hour:number = 18;
  function timeFormatChecker() {
    console.log(hour < 12 ? 'AM' : 'PM')
  };
  timeFormatChecker();
  hour = 11;

  timeFormatChecker();

  hour = 7;
  timeFormatChecker();






    return (
      <div className='container'>
          <div className='center'><GoHomeBtn /></div>

        <div className='card'>JavaScript Testing Page</div>
  </div>
  )
}

export default Test