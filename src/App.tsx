import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PlayerFull from './components/PlayerFull'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PlayerFull />
    </div>
  )
}

export default App
