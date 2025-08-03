import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Clarity from '@microsoft/clarity';


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID;
    if (projectId) {
        Clarity.init(projectId);
        console.log(`Clarity initialized with project ID: ${projectId}`);
    } else {
        console.warn('Clarity project ID is not set. Please check your environment variables.');
    }
  }, []);

  return (
    <>
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
