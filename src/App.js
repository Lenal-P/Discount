import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    setResult(result + value);
  };

  const handleCalculate = () => {
    try {
      const finalResult = eval(result).toString();
      setResult(finalResult);
      // Kiểm tra xem giá trị mới của result có phải là kết quả của một phép toán không
      if (!isNaN(parseFloat(finalResult)) && isFinite(finalResult)) {
        // Update lịch sử tính
        setHistory([...history, finalResult]);
      }
      // Reset ô input
      setResult("");
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setResult("");
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const handleBackspace = () => {
    setResult(result.slice(0, -1));
  };

  const handleDiscount = (percentage) => {
    // Hàm tính giảm giá
    try {
      setResult((prevState) => {
        const currentResult = eval(prevState);
        const discountAmount = currentResult * (percentage / 100);
        const finalResult = currentResult - discountAmount;
        // Update lịch sử tính
        setHistory([...history, finalResult]);
        return finalResult.toString();
      });
      // Reset ô input
      setResult("");
    } catch (error) {
      setResult("Error");
    }
  };

  const handleHistoryClick = (value) => {
    // Chuyển đổi giá trị từ chuỗi sang số
    const numericValue = parseFloat(value);
    // Kiểm tra xem giá trị đã được chuyển đổi thành số hay không
    if (!isNaN(numericValue)) {
      // Nếu là số, đặt giá trị mới cho result
      setResult(result + numericValue);
    } else {
      setResult("Error");
    }
  };

  const handleSumHistory = () => {
    const sum = history.reduce((acc, curr) => acc + parseFloat(curr), 0);
    setResult(sum.toString());
  };

  return (
    <div className="calculator">
      <input className="result" type="text" value={result} disabled />
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button
          onClick={() => handleClick("+")}
          style={{ backgroundColor: "#FFE4C9" }}
        >
          +
        </button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button
          onClick={() => handleClick("-")}
          style={{ backgroundColor: "#FFE4C9" }}
        >
          -
        </button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button
          onClick={() => handleClick("*")}
          style={{ backgroundColor: "#FFE4C9" }}
        >
          x
        </button>
        <button
          onClick={() => handleClick(".")}
          style={{ backgroundColor: "#B7E5B4" }}
        >
          .
        </button>
        <button onClick={() => handleClick("0")}>0</button>
        <button
          onClick={handleCalculate}
          style={{ backgroundColor: "#B7E5B4" }}
        >
          =
        </button>
        <button
          onClick={() => handleClick("/")}
          style={{ backgroundColor: "#FFE4C9" }}
        >
          :
        </button>
        <button onClick={() => handleDiscount(10)}>10%</button>
        <button onClick={() => handleDiscount(15)}>15%</button>
        <button onClick={() => handleDiscount(20)}>20%</button>
        <button onClick={() => handleDiscount(25)}>25%</button>
        <button onClick={() => handleDiscount(30)}>30%</button>
        <button onClick={() => handleDiscount(35)}>35%</button>
        <button onClick={() => handleDiscount(40)}>40%</button>
        <button onClick={() => handleDiscount(45)}>45%</button>
        <button onClick={() => handleDiscount(50)}>50%</button>
        <button onClick={() => handleDiscount(55)}>55%</button>
        <button onClick={() => handleDiscount(60)}>60%</button>
        <button onClick={() => handleDiscount(65)}>65%</button>
        <button
          onClick={handleSumHistory}
          style={{ backgroundColor: "#ADD8E6" }}
        >
          SumHis
        </button>

        <button
          onClick={handleBackspace}
          style={{ backgroundColor: "#FF6868" }}
        >
          ←
        </button>

        <button onClick={handleClear} style={{ backgroundColor: "#FF6868" }}>
          Cls
        </button>
        <button onClick={clearHistory} style={{ backgroundColor: "#FF6868" }}>
          ClsHis
        </button>
      </div>

      {/* Lịch sử tính toán */}
      <div className="history">
        <h3>History</h3>
        <ul>
          {history.map((item, index) => (
            <li
              key={index}
              onClick={() => handleHistoryClick(item)}
              style={{ cursor: "pointer" }}
            >
              {/* Hiển thị lịch sử tính toán với định dạng số */}
              {new Intl.NumberFormat("vi-VN").format(item)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
