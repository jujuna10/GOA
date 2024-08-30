import { useEffect, useState } from 'react'


function App() {
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(0)

  useEffect(() => {
    console.log("piece of state changed")
  },[state1,state2])

  const handleState1 = () => {
    setState1((prev) => prev + 1)
  }

  const handleState2 = () => {
    setState2((prev) => prev + 1)
  }

  return (
    <div>
      <p>{state1}</p>
      <button onClick={handleState1}>state1</button>

      <p>{state2}</p>
      <button onClick={handleState2}>state2</button>
    </div>
  )
}

export default App


// useEffect არის ერთ-ერთი ჰუკი რომელიც გამოიყენება გვერდის რენდერისას ან რე-რენდერისას.მას გადაეცემა ორი მნიშვნელობა პირველი callback ფუნქცია და მეორე array რომელშიც იქნება
// მდგომარეობები ჩასმული.თუ არაფერს არ ჩავსვავთ და ცარიელ მასივს დავტოვებთ მაშინ useEffect გაეშვება მხოლოდ ერთხელ გვერდის ჩატვირთვისას.useEffect გაეშვება თუ რომელიმე მდგომარეობა შეიცვლება
// მასივიდან
