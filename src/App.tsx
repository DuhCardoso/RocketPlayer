import { useState } from 'react'

import './App.css'

import PlayerFull from './components/PlayerFull'
import PlayerNotification from './components/PlayerNotification'
import PlayerNotificationTimer from './components/PlayerNotificationTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PlayerFull />
      <div className='notifications'>
        <PlayerNotificationTimer />
        <PlayerNotification />
      </div>
    </div>
  )
}

export default App
