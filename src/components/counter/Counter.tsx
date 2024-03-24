import { useState } from "react"
import Button from "components/button/Button"
import { CounterWrapper, ButtonControl, Count } from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counter/counterSlice"

function Counter() {
  // const [count, setCount] = useState<number>(0);

  // const handleMinus = () => setCount(prevCount => prevCount - 1);
  // const handlePlus = () => setCount(prevCount => prevCount + 1);
  // const handleMultiply = () => setCount(prevCount => parseFloat((prevCount * 2).toFixed(2)));
  // const handleDivide = () => setCount(prevCount => parseFloat((prevCount / 2).toFixed(2)));
  const dispatch = useAppDispatch()
  const count = useAppSelector(counterSliceSelectors.count)
  const handlePlus = () => {
    dispatch(counterSliceActions.add())
  }

  return (
    <CounterWrapper>
      <ButtonControl>
        {/* <Button name="-" onClick={handleMinus} />
        <Button name="multiply" onClick={handleMultiply} /> */}
        <Count>{count}</Count>
        {/* <Button name="divide" onClick={handleDivide} /> */}
        <Button name="+" onClick={handlePlus} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter
