import { useState } from "react";
import "./App.css";
import { add } from "./utils";
import styled from "styled-components";

function App() {
  const [str, setStr] = useState("");
  const [result, setResult] = useState(0);

  const onChangeString = (event) => {
    if (event?.target?.value) {
      setStr(event?.target?.value);
    }
  };

  const onCalculation = () => {
    const sum = add(str);
    setResult(sum);
    setStr("");
  };

  return (
    <Container>
      <ChildContainer>
        <input
          placeholder="Enter alphanumeric string"
          value={str}
          onChange={(e) => onChangeString(e)}
        />
        <button onClick={() => str && onCalculation()}>
          Trigger Calculation
        </button>
      </ChildContainer>
      <span>Result: {result}</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 10px;
`;

const ChildContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export default App;
