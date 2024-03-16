import { useState } from "react"
import Counter from "../../components/counter/Counter"

function Homework29() {
  const [count, setCount] = useState<number>(0)
  const handleMinus = () => {
    setCount(prevCount => prevCount - 1)
  }
  const handlePlus = () => {
    setCount(prevCount => prevCount + 1)
  }

  return <Counter count={count} onMinus={handleMinus} onPlus={handlePlus} />
}

export default Homework29
