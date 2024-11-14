import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Тема для підсвічування синтаксису
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';

const Test: React.FC = () => {
  const [code, setCode] = useState<string>('');  // Змінна для коду користувача
  const [output, setOutput] = useState<string>('');  // Змінна для результату виконання коду

  // Обробник зміни тексту в textarea
  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  // Функція для перехоплення методів console (console.log, console.table, etc.)
  const consoleOverride = {
    log: (message: any) => {
      setOutput((prev) => `${prev}\n${JSON.stringify(message, null, 2)}`);
      console.log(message);  // Виводимо повідомлення в реальну консоль
    },
    error: (message: any) => {
      setOutput((prev) => `${prev}\nError: ${message}`);
      console.error(message);  // Виводимо помилку в реальну консоль
    },
    warn: (message: any) => {
      setOutput((prev) => `${prev}\nWarning: ${message}`);
      console.warn(message);  // Виводимо попередження в реальну консоль
    },
    table: (message: any) => {
      setOutput((prev) => `${prev}\nTable: ${JSON.stringify(message, null, 2)}`);
      console.table(message);  // Виводимо таблицю в реальну консоль
    },
  };

  // Обробник сабміту форми
  const handleRunCode = () => {
    try {
      // Створюємо функцію без eval, передаючи consoleOverride
      const func = new Function('console', code); // Створюємо функцію з коду
      func(consoleOverride); // Викликаємо функцію з нашими переоприділеними методами console
      setOutput('Code executed successfully');  // Виведення повідомлення, що код успішно виконано
    } catch (error) {
      setOutput(`Error: ${error.message}`);  // Якщо помилка, відобразимо її
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
        <p>Відкрийте dev Tools для відображення консолі.</p>

        <textarea
          value={code}
          onChange={handleCodeChange}
          placeholder="Напишіть тут код..."
          style={{
            width: '100%',
            height: '200px',
            fontSize: '14px',
            padding: '10px',
            fontFamily: 'Consolas, monospace',
            backgroundColor: '#2d2d2d',
            color: '#f8f8f2',
            lineHeight: '1.5',
          }}
        ></textarea>

        <button onClick={handleRunCode}>Run Code</button>

        {/* Виведення результатів виконання коду */}
        <div className="output">
          <pre>{output}</pre>
        </div>

        {/* Для підсвічування синтаксису */}
        <pre className="language-javascript" dangerouslySetInnerHTML={{ __html: highlightedCode }}></pre>
      </div>
    </div>
  );
};

export default Test;
