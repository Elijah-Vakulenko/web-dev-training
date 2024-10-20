import React, { useState } from 'react';
import s from './Task.module.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism';

interface TaskProps {
  problem: string;
  solution: string;
}

const Task: React.FC<TaskProps> = ({ problem, solution }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSolution = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.container}>
      <h3 className={s.problem}>{problem}</h3>
      <button className={s.btn} onClick={toggleSolution}>
        {isOpen ? 'Сховати' : 'Відповідь'}
      </button>
      {isOpen && <p className={s.solution}> <SyntaxHighlighter language="jsx" style={dracula}>{solution}</SyntaxHighlighter></p>}
    </div>
  );
};

export default Task