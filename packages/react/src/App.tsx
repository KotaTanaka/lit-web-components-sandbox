import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { MySearchInput } from './components/MySearchInput'
import { BasicsSample } from './examples/playground/06-React/Basics/BasicsSample'
import { ReactEventsSample } from './examples/playground/06-React/ReactEvents/ReactEventsSample'
import { CustomEventsSample } from './examples/playground/06-React/CustomEvents/CustomEventsSample'
import { SlotsSample } from './examples/playground/06-React/Slots/SlotsSample'
import { RefsSample } from './examples/playground/06-React/Refs/RefsSample'

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
      <h2 className="heading">Lit Playground</h2>
      <div>
        <p>Basic</p>
        <BasicsSample />
      </div>
      <div>
        <p>React events</p>
        <ReactEventsSample />
      </div>
      <div>
        <p>Custom events</p>
        <CustomEventsSample />
      </div>
      <div>
        <p>Slots</p>
        <SlotsSample />
      </div>
      <div>
        <p>Refs</p>
        <RefsSample />
      </div>
    </div>
  )
}

export default App
