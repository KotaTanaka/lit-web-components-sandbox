import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { MySearchInput } from './components/MySearchInput'
import { BasicsSample } from './examples/playground/05-React/Basics/BasicsSample'
import { ReactEventsSample } from './examples/playground/05-React/ReactEvents/ReactEventsSample'
import { CustomEventsSample } from './examples/playground/05-React/CustomEvents/CustomEventsSample'
import { SlotsSample } from './examples/playground/05-React/Slots/SlotsSample'
import { RefsSample } from './examples/playground/05-React/Refs/RefsSample'

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
      <div className="playground">
        <div className="container">
          <p className="label">Basic</p>
          <div className="content">
            <BasicsSample />
          </div>
        </div>
        <div className="container">
          <p className="label">React events</p>
          <div className="content">
            <ReactEventsSample />
          </div>
        </div>
        <div className="container">
          <p className="label">Custom events</p>
          <div className="content">
            <CustomEventsSample />
          </div>
        </div>
        <div className="container">
          <p className="label">Slots</p>
          <div className="content">
            <SlotsSample />
          </div>
        </div>
        <div className="container">
          <p className="label">Refs</p>
          <div className="content">
            <RefsSample />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
