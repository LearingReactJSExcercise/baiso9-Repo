import React, { useState } from "react";

function App() {
  // State to keep track of input values and the result
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

 
  const onA = (e) => {
    setA(e.target.value);
  };


  const onB = (e) => {
    setB(e.target.value);
  };

  // Handle compute button click
  const computeSum = () => {
    const numA = parseFloat(a);  //convert string to number
    const numB = parseFloat(b); 

    if (isNaN(numA) || isNaN(numB)) {     //isNaN() được sử dụng để kiểm tra xem một giá trị đã cho có phải là số không hợp lệ hay không-giá trị trả về T (NaN)
      setError(true);
      setResult("Invalid input. Please enter valid numbers.");
    } else {
      setError(false);
      setResult(numA + numB);
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>
      <input disabled value={result} style={{ color: error ? "red" : "black" }} />

      <button onClick={computeSum}>Compute</button>
    </main>
  );
}

export default App;
