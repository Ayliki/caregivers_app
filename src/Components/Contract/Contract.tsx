import React from 'react';
import { Link } from 'react-router-dom';

const Contract: React.FC = () => {
  return (
    <div>
      <h1>Условия Договора</h1>
      <p>Текст вашего договора...</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default Contract;