import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'

function App() {
 

  return (
    <>
      <div>
        <h1 className='text-center mt-5'>Counter App</h1>
        <div style={{minHeight:'70vh'}} className='d-flex justify-content-center align-items-cengter w-100'>
        <Counter/>
        </div>
        
      </div>
    </>
  )
}

export default App
