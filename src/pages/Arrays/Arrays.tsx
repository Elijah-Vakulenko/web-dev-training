// src/pages/Arrays/Arrays.tsx
import React from 'react';
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';

// Типизация для функции executeScript
const executeScript = (script: string): string => {
  const consoleOutput: string[] = [];
  const consoleLog = (output: any) => consoleOutput.push(String(output));

  // Замена стандартного console.log на нашу функцию
  const originalConsoleLog = console.log;
  console.log = consoleLog;

  try {
    // Выполнение скрипта
    eval(script);
  } catch (e: any) {
    consoleOutput.push(`Error: ${e.message}`);
  }

  // Восстанавливаем оригинальный console.log
  console.log = originalConsoleLog;

  return consoleOutput.join('\n');
};

const Arrays: React.FC = () => {
  const script1 = `
const cart = [54, 28, 185, 78, 92, 17, 120];
let total = 0;
for (let i = 0; i < cart.length; i += 1) {
    console.log(cart[i]);
    total += cart[i];
}
console.log("Total:", total);
`;

  const script2 = `
const cart = [54, 28, 185, 78, 92, 17, 120];
let total = 0;
for (const item of cart) {
    total += item;
}
console.log("Total:", total);
`;

  return (
    <div className='card'>
      <GoHomeBtn />

      <h2>Arrays</h2>

      <div className='task'>
        <div>
          <h3>Script 1</h3>
          <pre className='script'>{script1}</pre>
        </div>
        <div>
          <h4>Console Output:</h4>
          <pre className='console'>{executeScript(script1)}</pre>
        </div>
      </div>

      <div className='task'>
        <div>
          <h3>Script 2</h3>
          <pre className='script'>{script2}</pre>
        </div>
        <div>
          <h4>Console Output:</h4>
          <pre className='console'>{executeScript(script2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default Arrays;
