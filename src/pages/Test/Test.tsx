import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Тема для підсвічування синтаксису
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import s from './Test.module.css';
import clsx from 'clsx';

const Test: React.FC = () => {
  const [code, setCode] = useState<string>(''); // Змінна для коду користувача
  const [output, setOutput] = useState<string>(''); // Змінна для результату виконання коду

  // Обробник зміни тексту в textarea
  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  // Функція для створення HTML-таблиці
  const generateTableHTML = (data: any) => {
    if (!Array.isArray(data)) {
      return '';
    }

    const headers = Object.keys(data[0] || {}); // Получаем ключи объекта (если это массив объектов)
    const rows = data.map((row: any) => {
      return headers.map((header) => `<td style="border: 1px solid #ddd; padding: 8px;">${row[header] ?? ''}</td>`).join('');
    });

    const tableHTML = `
      <table style="border: 1px solid #ddd; border-collapse: collapse; margin: 10px 0;">
        <thead>
          <tr>
            ${headers.map((header) => `<th style="padding: 8px; background-color: #f4f4f4; border: 1px solid #ddd;">${header}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `<tr>${row}</tr>`).join('')}
        </tbody>
      </table>
    `;
    return tableHTML;
  };

  // Функція для перехоплення методів console (console.log, console.table, etc.)
  const consoleOverride = {
    log: (message: any) => {
      setOutput((prev) => `${prev}<br/>${message}`); // Выводим в строку
      console.log(message); // Виводимо повідомлення в реальну консоль
    },
    error: (message: any) => {
      setOutput((prev) => `${prev}<br/><span style="color: red;">${message}</span>`);
      console.error(message); // Виводимо помилку в реальну консоль
    },
    warn: (message: any) => {
      setOutput((prev) => `${prev}<br/><span style="color: orange;">${message}</span>`);
      console.warn(message); // Виводимо попередження в реальну консоль
    },
    table: (message: any) => {
      // Если данные - это массив, выводим таблицу
      if (Array.isArray(message)) {
        const tableHTML = generateTableHTML(message);
        setOutput((prev) => `${prev}<br/>${tableHTML}`);
      } else {
        setOutput((prev) => `${prev}<br/>Invalid data for table`);
      }
      console.table(message); // Виводимо таблицю в реальну консоль
    },
  };

  // Обробник сабміту форми
  const handleRunCode = () => {
    setOutput(''); // Очищаємо попередній вивід
    try {
      // Створюємо функцію без eval, передаючи consoleOverride
      const func = new Function('console', code); // Створюємо функцію з коду
      func(consoleOverride); // Викликаємо функцію з нашими перевизначеними методами console
    } catch (error) {
      // Обробка помилки з перевіркою типу
      if (error instanceof Error) {
        setOutput(`Error: ${error.message}`);
      } else {
        setOutput('An unknown error occurred');
      }
    }
  };

  // Підсвічування синтаксису
  const highlightedCode = Prism.highlight(code, Prism.languages.javascript, 'javascript');

  return (
    <div className="container">
      <div className="center">
        <GoHomeBtn />
      </div>
      <div className="card">
        <h1>JavaScript Testing Page</h1>
        <div className={s.layout}>
          <div>
            <textarea
              value={code}
              onChange={handleCodeChange}
              placeholder="Напишіть ваш JavaScript код тут..."
              style={{
                width: '100%',
                resize: 'none',
                gridRow:'1',
                gridColumn: '1/2',
                height: '200px',
                fontSize: '14px',
                padding: '10px',
                fontFamily: 'Consolas, monospace',
                backgroundColor: '#2d2d2d',
                borderRadius: '8px',
                color: '#f8f8f2',
                lineHeight: '1.5',
              }}
            ></textarea>

            <button className={s.btn} onClick={handleRunCode}>Run Code</button>
          </div>

          {/* Виведення результатів виконання коду */}
          <div className={clsx('output', s.console)}>
            <div dangerouslySetInnerHTML={{ __html: output }}></div>
          </div>

          {/* Для підсвічування синтаксису */}
          <div>
            <p>Your final code looks like:</p>
            <pre style={{
              borderRadius: '8px',
              gridRow: '2',
              overflowX:'auto',
                gridColumn: '1/2',
            }} className="language-javascript" dangerouslySetInnerHTML={{ __html: highlightedCode }}></pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
