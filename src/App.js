import { useState } from 'react'
import Die from './Die'

export default function App() {
  const [dice, setDice] = useState(allNewDice())
  const [isHeld, setIsHeld] = useState(true)

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({ value: Math.ceil(Math.random() * 6) })
    }
    return newDice
  }
  const click = () => {
    setIsHeld(true)
  }

  const diceElements = dice.map((die, index) => (
    <Die key={index} value={die.value} isHeld={die.isHeld} />
  ))

  return (
    <main>
      <div className='dice-container'>{diceElements}</div>
      <button className='btn' onClick={() => setDice(allNewDice)}>
        Roll
      </button>
    </main>
  )
}
