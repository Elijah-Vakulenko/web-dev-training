import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Task from '../../components/Task/Task';

const obj = `
const user = {
  name: 'Paul McCartney',
  dateOfBirth: 'June 18, 1942',
  age: 80,
  occupation: 'musician',
  wife: 'Linda Eastman',
  children: ['Heather', 'Mary', 'Stella', 'James'],
  address: 'Cavendish Avenue 7, St Johns Wood, London, England',
};

Статичне звернення до значення:
console.log(user.dateOfBirth);

Динамічне звернення:
console.log(user['dateOfBirth'])

Зміна значення властивостей у об'єкта:

Як і зі звичайною зміною...вносимо нову інформацію після знаку дорівнює (=).
Наприклад змінемо рядок на масив:

user.occupation = ['singer', 'songwriter', 'musician'];
console.log(user.occupation); // 'singer', 'songwriter', 'musician'

якщо ми змінюємо одне із значень масиву, тоді звернувшись до властивості вказуємо у квадратних скобках індекс елементу:

user.children[0] = 'Heather Louise See';
console.log(user.children); //'Heather Louise See', 'Mary', 'Stella', 'James'

user.children[1] = 'Mary Anna McCartney';
user.children[2] = 'Stella Nina McCartney';
user.children[3] = 'James Louis McCartney';
console.log(user.children); //'Heather Louise See', 'Mary Anna McCartney', 'Stella Nina McCartney', 'James Louis McCartney';

Для створення нової властивості/ключа, звертаємося до цієї невідомої властивості і через (=) задаємо значення.
наприклад створемо ключ colaboratedWith:

user.colaboratedWith = ['The Quarrymen', 'The Beatles', 'Wings'];
console.log(user); 
// address: "Cavendish Avenue 7, St Johns Wood, London, England"
//age: 80
//children: (4) ['Heather Louise See', 'Mary Anna McCartney', 'Stella Nina McCartney', 'James Louis McCartney']
//colaboratedWith: (3) ['The Quarrymen', 'The Beatles', 'Wings']
//dateOfBirth: "June 18, 1942"
//name: "Paul McCartney"
//occupation: (3) ['singer', 'songwriter', 'musician']
//wife: "Linda Eastman"

Видалення властивості:

delete user.age;
`;

const foo =`Наприклад маємо об'єкт з параметрами x та y. 

const object = {
  x: 7,
  y: 3,
};

Ми створюємо функцію, яка приймає якісь "значення" у вигляді об'єкту.
В тілі функції ми робимо математичну операцію зі значенням.X  та значенням.Y.
в тілі функції нам не важливо під якою назвою будуть ці значення, в нашому прикладі це values,
Ми вказуємо, що з яким би об'єктом не працювала б функція, в ньому є ключ X та Y, до яких ми і звертаємось.

function foo(values) {
  console.log(values);
  return values.x + values.y;
}

foo(object); // ← Тут ми передаємо наш об'єкт, а в ньому функція знайде потрібні ключі для обчислення.`


const objxmpl = `

const pc = {
  CPU: 'Intel Core i7-12700K 3.6 GHz',
  GPU: 'Gigabyte GeForce RTX 3060 GAMING OC 12GB GDDR6 Rev 2.0',
  motherboard: 'MSI PRO Z690-A WIFI DDR4',
  RAM: 'Kingston Fury Beast DDR4 3600 MHz 64Gb',
  HDD: ['Seagate Barracuda 4Tb', 'Western Digital 750Gb'],
  SDD: 'WD BLACK SN770 1TB NVMe',
  powerSupply: 'DeepCool PQ650M 650W 80 Plus Gold Modular',
  case: 'DeepCool Matrexx 55 Mesh ADD-RGB 4F',
  otherDevices: {
    keyboard: 'Tempest K9 RGB Backlit Teclado Gaming RGB',
    monitor: 'LG Ultragear 24GQ50F-B 24" LED FullHD 165Hz FreeSync Premium',
    audioInterface: 'Focusrite Scarlett 8i6 3rd gen',
    speakers: 'M-Audio BX5 DX3',
    webCam: 'Logitech',
  },
};

const images = [
  {
    id: 1,
    url: '/img/chapter-two.jpg',
    title: 'Chapter two',
    alt: 'The book and the poem',
    class: 'img-obj',
    width: '100', 
    height: '100' 
  },
  {
    id: 2,
    url: '/img/coast.jpg',
    title: 'Coast',
    alt: 'mystic coastline view',
    class: 'img-obj',
    width: '100', 
    height: '100' 
  },
  {
    id: 3,
    url: '/img/sunset.jpg',
    title: 'Sundown',
    alt: 'girl and a sundown',
    class: 'img-obj',
    width: '100', 
    height: '100' 
  }
];`

const keys = `
Для створення гнучких, кастомних властивостей / ключів у об'єктів існують обчислювальні властивості.
Синтаксично вони оформлюються в квадратних скобках ([]).
В такому оформленні, над назвою ключа може застосовуватись якийсь метод або в якості назви ключа пережається якась зміна.

Наприклад:

const displacement = 'engineCapacity';

const car = {
  company: 'Honda',
  ['model'.toUpperCase]: 'Civic IMA',
  year: 2005,
  horsepowers: 85,
  [displacement]: '1.3L',
  fuel: 'gasoline',
  transmission: '5-Speed Manual',
  acceleration: '11.6 seconds (0-60 mph)', 
  fuelConsumption: '5.1 L/100 km (combined)', 
  maxSpeed: 175, 
}

  console.log(car.engineCapacity); //'1.3L'
  console.log(car)//MODEL: 'Civic IMA'

  Або створемо об'єкт, з властивістю, яку ввів користувач:

  const key = prompt('Enter your key title');
  const value = prompt('type the value of your key');

  const obj = {
    [key]: value,
  }

  console.log(obj); //
`

const Objects: React.FC = () => {
  return (
    <div className='container'>
      <GoHomeBtn />
<h2>Об'єкти</h2>
      <SyntaxHighlighter language="jsx" style={dracula}>{obj}</SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={dracula}>{objxmpl}</SyntaxHighlighter>
      <h3>Взаємодія функцій з об'єктами</h3>
      <SyntaxHighlighter language="jsx" style={dracula}>{foo}</SyntaxHighlighter>
      <h3>Обчислювальні властивості об'єктів</h3>
      <SyntaxHighlighter language="jsx" style={dracula}>{keys}</SyntaxHighlighter>


               <Task
          problem=''
          solution={``}>
        </Task>
         <Task
          problem=''
          solution={``}>
        </Task>
         <Task
          problem=''
          solution={``}>
        </Task>
         <Task 
          problem=''
          solution={``}>
        </Task>
         <Task
          problem=''
          solution={``}>
        </Task>
    </div>
  )
}

export default Objects