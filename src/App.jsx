import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentUseEffExe from './quizes/1111/ParentHook'


function App() {
  const [count, setCount] = useState(0)

  // console.log('step 1')
  // setTimeout(()=>console.log('step 2'),0)
  // Promise.resolve('Step3').then((res)=>console.log(res + 'step 3'))
  // console.log('step 4')

  return (
    <>
    <ParentUseEffExe/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App