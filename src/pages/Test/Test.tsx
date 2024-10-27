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
// let weather: string = 'rainy';

//   console.log(weather);

//   function weatherChecker() {
//     if (weather === 'sunny') console.log('Don\'t forget your sunglasses');
//   else if (weather === 'rainy') console.log('Grab your raincoat');
//   else if (weather === 'windy') console.log('You should wear a scarf');
//   else console.log('The weather is awesome today! Have fun!')
//   }
  
//   weatherChecker();

//   weather = 'sunny';
//   console.log(weather);
//   weatherChecker();

//   weather = 'cloudy';
//   console.log(weather);
//   weatherChecker();

//   let hour:number = 18;
//   function timeFormatChecker() {
//     console.log(hour < 12 ? 'AM' : 'PM')
//   };
//   timeFormatChecker();
//   hour = 11;

//   timeFormatChecker();

//   hour = 7;
//   timeFormatChecker();

//   let weekDay = 'Monday';

// switch(weekDay){
//   case 'Monday' :
//     console.log('It`s a hard day...always');
//     break;
//   case 'Tuesday' :
//     console.log('Ok...we survived Monday..it`s going well');
//     break;
//   case 'Wednesday' :
//     console.log('Whad doesn`t kill us makes us stronger');
//     break;
//   case 'Thursday' :
//     console.log('Please. tell me it`s a Friday');
//     break;
//   case 'Friday' :
//     console.log('Party night!');
//     break;
//   case 'Suterday' :
//     console.log('It`s time to clean up your house!');
//     break;
//   case 'Sunday' :
//     console.log('Take a rest today!');
//     break;
//   default:
//     console.log('I have no idea what it is...')
// }



// Напиши скрипт для відображення годин і хвилин, який би виконував такі умови:
//   - це рядок формату '14 г. 26 хв.'
//     - якщо значення змінної minutes дорівнює нулю, тоді має виводитися тільки 14 г.
    
  // debugger;
  // const hours = 14
  // const minutes = 26
  // let timestring;
  
  // if (minutes === 0) { timestring = `${hours} г.` } else {
  //   timestring = `${hours} г. ${minutes} хв.`
  // }

  // console.log(timestring)
  
  //або замість if/else використовуємо тернарний вираз одразу у оголошенні змінної timestring:
  //const timestring = `${hours} г. + minutes === 0 ? '' : ${minutes} хв.`
  //↑ тобто timestring дорівнюватиме 14 г. а далі виконується умова, якщо хвилини === 0 тоді виводиться пустий рядок, якщо ні, тоді значення хвилин.

// let price = 1500;
// const targetPrice = 800;
// while(price > targetPrice && !targetPrice < 800 ){
//   console.log('Чи не могли б ви зробити знижку?');
//   price -= Math.min(Math.round(Math.random() * 200), price - targetPrice);
//   //↑ Тут ми зменшуємо ціну застосовуючи рандомайзер та заокруглення до цілого, а потім Math.min  обирає найменше число
//   // між рандомним і різницею нашої ціни та бажаної ціни(це робить неможливим падіння ціни меньше 800, 
//   //оскільки якщо на останній ітерації рандомне число буде бльшим за різницю цін, то буде обрана саме різниця цін, що при мінусуванні дасть нам рівно 800).
//   console.log('Можу віддати за -', price, 'гривень');
// }
//   console.log('Добре, купую!');


// let i = 10;
// while(i > 0) {
//   console.log('lets count - ', i);
//   i--;
//   }
  
let counter = 1
do{counter += 1;
console.log(counter)} while (counter < 10);

    return (
      <div className='container'>
          <div className='center'><GoHomeBtn /></div>

        <div className='card'>JavaScript Testing Page</div>
  </div>
  )
}

export default Test