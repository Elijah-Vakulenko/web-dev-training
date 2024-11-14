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
  const generateTableHTML = (data: any[]) => {
    if (!Array.isArray(data)) {
      return 'Invalid data for table';
    }

    const tableHTML = `
      <table style="border: 1px solid #ddd; border-collapse: collapse; margin: 10px 0;">
        <thead>
          <tr>
            <th style="padding: 8px; background-color: #f4f4f4; border: 1px solid #ddd;">(index)</th>
            <th style="padding: 8px; background-color: #f4f4f4; border: 1px solid #ddd;">value</th>
          </tr>
        </thead>
        <tbody>
          ${data.map((item, index) => `
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">${index}</td>
              <td style="border: 1px solid #ddd; min-width: 250px; padding: 8px; color: red;">'${item}'</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    return tableHTML;
  };

  // Функція для перехоплення методів console (console.log, console.table, etc.)
  const consoleOverride = {
    log: (message: any) => {
      setOutput((prev) => `${prev}<br/>${message}`);
      console.log(message);
    },
    error: (message: any) => {
      setOutput((prev) => `${prev}<br/><span style="color: red;">${message}</span>`);
      console.error(message);
    },
    warn: (message: any) => {
      setOutput((prev) => `${prev}<br/><span style="color: orange;">${message}</span>`);
      console.warn(message);
    },
    table: (message: any) => {
      if (Array.isArray(message)) {
        const tableHTML = generateTableHTML(message);
        setOutput((prev) => `${prev}<br/>${tableHTML}`);
      } else {
        setOutput((prev) => `${prev}<br/>Invalid data for table`);
      }
      console.table(message);
    },
  };

  // Обробник сабміту форми
  const handleRunCode = () => {
    setOutput('');
    try {
      const func = new Function('console', code);
      func(consoleOverride);
    } catch (error) {
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
          <div style={{ gridColumn: '1', gridRow: '1' }}>
            <textarea
              className={s.textarea}
              value={code}
              onChange={handleCodeChange}
              placeholder="Напишіть ваш JavaScript код тут..."
            ></textarea>
            <button className={s.btn} onClick={handleRunCode}>Run Code</button>
          </div>

          <div className={clsx('output', s.console)} style={{ gridColumn: '2 / 3', gridRow: '1 / 3' }}>
            <div dangerouslySetInnerHTML={{ __html: output }}></div>
          </div>

          <div style={{ gridColumn: '1', gridRow: '2' }}>
            <p>Your final code looks like:</p>
            <pre 
            className="language-javascript"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}></pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
