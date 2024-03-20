import { useState } from 'react';
import Button from '../button/Button';
import { CounterWrapper, ButtonControl, Count } from "./styles";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const handleMinus = () => setCount(prevCount => prevCount - 1);
  const handlePlus = () => setCount(prevCount => prevCount + 1);
  const handleMultiply = () => setCount(prevCount => formatNumber(prevCount * 2));
  const handleDivide = () => setCount(prevCount => formatNumber(prevCount / 2));

  const formatNumber = (num: number) => {
    return Math.round(num * 100) / 100;
  };

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={handleMinus} />
        <Button name="Умножить" onClick={handleMultiply} />
        <Count>{count}</Count>
        <Button name="Разделить" onClick={handleDivide} />
        <Button name="+" onClick={handlePlus} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;