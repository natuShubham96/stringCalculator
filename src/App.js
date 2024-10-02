import { useState } from 'react';
import './App.css';
import { add } from './utils';

function App() {
  const [str, setStr] = useState('');
  const [result, setResult] = useState(0);

 const onChangeString = (event) => {
    if(event?.target?.value) {
      setStr(event?.target?.value);
    }
  }

  const onCalculation = () => {
    const sum = add(str);
    setResult(sum);
    setStr('');
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', gap: '10px'}}>
    <div style={{display: 'flex', gap: '10px'}}>
      <input placeholder='Enter alphanumeric string' value={str} onChange={(e) => onChangeString(e)}/>
      <button onClick={() => str && onCalculation()}>Trigger Calculation</button>
    </div>
    <span>Result: {result}</span>
    </div>
  );
}

export default App;
