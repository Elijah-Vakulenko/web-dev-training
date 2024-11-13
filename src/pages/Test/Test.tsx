import React from 'react'
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';

const Test: React.FC = () => {

//------------------------------------------------------------------------------------
 const ukrainianCities = ['Київ', 'Львів', 'Харків', 'Одеса', 'Дніпро', 'Запоріжжя', 'Івано-Франківськ', 'Тернопіль', 'Чернівці', 'Вінниця', 'Полтава', 'Суми', 'Чернігів', 'Черкаси', 'Хмельницький', 'Рівне', 'Житомир', 'Ужгород', 'Луцьк', 'Миколаїв', 'Херсон', 'Донецьк', 'Луганськ', 'Кропивницький', 'Сімферополь'];
  const cityNumberEleven = ukrainianCities.at(11);
  console.log(cityNumberEleven);
  
    return (
      <div className='container'>
          <div className='center'><GoHomeBtn /></div>

        <div className='card'>JavaScript Testing Page</div>
  </div>
  )
}

export default Test