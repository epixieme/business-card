import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MainBody from './components/MainBody'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className='split-main'>
      <Header />
      <div>
      <MainBody /> 
      <Footer /> 

      </div>
    </div>

</div>   
  )
}

export default App
