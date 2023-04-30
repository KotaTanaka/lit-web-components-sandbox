import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { MySearchInput } from './components/MySearchInput'

const App = () => {
  return (
    <div className="App">
      <h1>@kotice/lit-web-components-sandbox-react</h1>
      <div className="logo-list">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2 className="heading">🌏 Components</h2>
      <MySearchInput />
    </div>
  )
}

export default App
