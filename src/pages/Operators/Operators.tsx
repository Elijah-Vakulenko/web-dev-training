import React from 'react'
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Task from '../../components/Task/Task.tsx'

const and = `
Оператор && 'І / ТА' завжди повертає ліву частину якщо вона дорівнює false.

Для приклажу зробимо перевірку авторизації. У базі є логін та пароль користувача. Щоб він зайшов на ресурс введені данні мають відповідати тим зо є у базі:

let username = 'Bobik';
let password = 'qwerty';

if( username === 'Bobik' && password === 'qwerty'){
  console.log('Successful access')
} else {console.log('Access forbiden')}
↑ Тобто ми робимо подвійну перевірку... Якщо логін користувача не співпадає з 'Bobik' то доступу немає, якщо логін користувача 'Bobik' перевіряється умова зправа і 
якщо пароль не відповідає 'qwerty'  у доступі відхилено.
----------------------------------------
Ось ще приклад...перевіряємо чи оптимальна погода сьогодні. Умова для перевірки така: Температура більша 15ти градусів І температура меньше 25.
let temperature = 20;
if (temperature > 15 && temperature < 25) {
    console.log("Comfortable temperature");
}
-------------------------------------
Далі нам треба, щоб за умовою число було парним та невід'ємним. Робимо перевірку, для першої умови іикористовуємо оператор залишку від ділення %.
Тобто загалом ми кажемо...якщо ми ділимо число на 2 і залишок від ділення дорівнює 0 А ТАКОЖ число більше за 0, тоді виводимо в консоль повідомлення.
нагадаємо собі як працює оператор % - він показує скільки лишається якщо перший операнд поділити на другий. наприклад 9 % 3 = 0 бо,
 якщо розділити 9 на 3 ми ідеально ділимо його на 3 частини не маючи залишку, а от якщо ми 10 ділимо на 3 то при 10 % 3 ми отримаємо 1, 
 бо 10 не можна поділити ідеально без залишку, залишком буде 1. 12 % 3 = 0. Бо 12 кратне 3.

let num = 10;
if (num % 2 === 0 && num > 0) {
    console.log("Number is positive and even");
}
-------------------------------
Перевіримо чи відчинений магазин:
let currentHour = 14;
let isWeekend = false;
if (currentHour > 9 && currentHour < 18 && !isWeekend) {
    console.log("We are open");
}
↑ Якщо поточний час більше ніж 9 тобто години відкриття, ТА меньше 18 - години закритта ТА сьогодні не вихідний день, тоді магазин відчинений. 
Тут використовуємо два оператори І та оператор заперечення, щоб підкрислити в умові що це НЕ є вихідним днем.
`
const or = `
Оператор АБО діє за тією ж логікою тільки нас задовольнить хоча б один параметр який відповідав би умові. Для прикладу знову перевіримо чи файна погода
Ми кажемо, якщо температура меньше 15 чи вже більша за 25, ми визначаємо погоду як дискомфортну, не оптимальну для нас.
let temperature = 30;
if (temperature < 15 || temperature > 25) {
    console.log("Temperature is uncomfortable");
}
-------------------
Наприклад ми можемо задати елементу два стилі на випадок якщо один з них не підтримується:

element.style.display = 'grid' || 'flex';

---------------------
У профілі користувача виводимо його фото, якщо він таке завантажив або встановлюємо дефолтне фото:

let profileImage = user.profileImage || '/images/default-profile.png';
document.getElementById('avatar').src = profileImage;
---------------------------
Виведемо повідомлення з привітанням з попередньою перевіркою. Або виведеться ім'я авторизованого користувача, АБО у привітанні виведеться Гість.

let user = currentUser || { name: "Guest", role: "guest" };
console.log(\`Hello, \${user.name}!\`);

Оператор АБО повертає перше true значення, так наприкладі маємо:

let name = '';
let username = name || 'Anonym';
console.log(\`Hello \${username}\`)

↑ Якщо користувач лишив поле з іменем не заповненим його привітають як Аноніма. Тобто пустий рядок це 0 у булевому перетворенні, тобто використається true значення 'Anonym'
`
const not = `
Зробимо перевірку чи є користувач адміністратором:

let isAdmin = true; 
if (!isAdmin) { //← тут ми зазначаємо якщо при перевірці змінна isAdmin Не дорівнює true, тоді видаємо повідомлення "User is not an admin"
    console.log("User is not an admin");
}
`

const tips = `
Складні вирази з операторами можуть заплутувати при розв'язанні задач чи побудові скрипту, тому існує спосіб швидкого розв'язання рівняння переводячи його у математичне рівняння:

true = 1;
false = 0;
&& = *;
|| = +;

Маємо приклад:

false && false && true || false || true || false && false;
(0 * 0 * 1) + 0 + 1 + (0 * 0) → 0 + 0 + 1 + 0 = 1 (true)



`

const Operators: React.FC = () => {
  return (
    <div className='container'>
          <GoHomeBtn />
          <h3>Логічні оператори</h3>
          <ul>
              <li><h4 className='title'>&&</h4>
                  <p></p>
                  <div className="input"><SyntaxHighlighter language="jsx" style={dracula}>{and}</SyntaxHighlighter>
                  </div></li>
              <li><h4 className='title'>||</h4>
                  <p></p>
                  <div className="input"><SyntaxHighlighter language="jsx" style={dracula}>{or}</SyntaxHighlighter>
                  </div></li>
              <li><h4 className='title'>!</h4>
                  <p></p>
                  <div className="input"><SyntaxHighlighter language="jsx" style={dracula}>{not}</SyntaxHighlighter>
                  </div></li>
              <li><h4 className='title'>Як вираховувати складні вирази</h4>
                  <p></p>
                  <div className="input"><SyntaxHighlighter language="jsx" style={dracula}>{tips}</SyntaxHighlighter>
          </div></li>
        <li style={{display:'flex', gap: 10,flexDirection: 'column'}}>
          <h4 className='title'>Задачі</h4>
          <Task
            problem='Напиши скрипт перевірки підписки користувача 
            і надання йому доступу до контенту.
            Існує три види підписки: free, pro, vip;
            Доступ до контенту мають тільки pro  та vip;'
            solution={`
            const sub = 'free';
            if(sub === 'pro' || sub === 'vip'){
              console.log('Have fun!')
            } else {
              You don't have a permission!')}
          `}>
          </Task>
          <Task
            problem='Напиши скрипт, який перевіряє можливість відкрити чат з користувачем. Для цього, користувач має бути: другом, онлайн, без режима НЕ ТУРБУВАТИ.'
            solution={`
            const isOnline = true;
            const isFriend = true;
            const isDnd = true;

            const canOpenChat = isOnline && isFriend && !isDnd;
            console.log('Можна відкрити чат', canOpenChat) //← true

          `}>
          </Task>
        </li>

          </ul>
    </div>
  )
}

export default Operators