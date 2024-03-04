import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    setResult(result + value);
  };

  const handleCalculate = () => {
    try {
      const finalResult = eval(result).toString();
      setResult(finalResult);
      // Update lịch sử tính
      setHistory([...history, finalResult]);
    } catch (error) {
      setResult('Error');
    }
  };
  

  const handleClear = () => {
    setResult('');
  };

  const handleDiscount = (percentage) => {
    // Hàm tính giảm giá
    const currentResult = eval(result);
    const discountAmount = currentResult * (percentage / 100);
    const finalResult = currentResult - discountAmount;
    setResult(finalResult.toString());
  };

  const handleHistoryClick = (value) => {
    setResult(value);
  };
  
  

  return (
    <div className="calculator">
      <input className="result" type="text" value={result} disabled />
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleDiscount(10)}>Giảm 10%</button>
        <button onClick={() => handleDiscount(20)}>Giảm 20%</button>
        <button onClick={() => handleDiscount(30)}>Giảm 30%</button>
      </div>

      {/* Lịch sử tính toán */}
      <div className="history">
        <h3>Lịch Sử Tính Toán</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index} onClick={() => handleHistoryClick(item)} style={{cursor: 'pointer'}}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
