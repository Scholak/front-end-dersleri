import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'

import { useState } from 'react'

function App() {
  // [değişken, setDeğişken]
  const [name, setName] = useState('Talha')
  const [counter, setCounter] = useState(1)
  const [main, setMain] = useState('Hakkımızda')
 
  const incement = () => {
    setCounter(counter+1)
  }

  const incementByValue = value => {
    setCounter(counter + parseInt(value))
  }

   const decrement = () => {
		setCounter(counter - 1)
   }

  const changeName = () => {
    if (name === 'Sebahattin') {
      setName('Talha')
    } else {
      setName('Sebahattin')
    }
  }

  const changeMain = content => {
    setMain(content)
  }
  return (
		<div>
			<Header />
			<Navbar active='Anasayfa' textColor='green' />
			<Content active={main} />
			<Footer />

			{/* {name}
      <button onClick={changeName}>change name</button>

      <br />
      <br /> */}

			<button onClick={decrement}>-</button>
			{counter}
			<button onClick={incement}>+</button>
			<input
				type='number'
				value={counter}
				onChange={e => incementByValue(e.target.value)}
			/>
			{/* <button onClick={() => changeMain('Anasayfa')}>anasayfa</button>
			<button onClick={() => changeMain('Hakkımızda')}>hakkımızda</button>
			<button onClick={() => changeMain('İletişim')}>iletişim</button> */}
		</div>
  )
}

export default App;
