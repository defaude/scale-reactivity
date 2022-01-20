import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import '@telekom/scale-components/dist/scale-components/scale-components.css'
import { applyPolyfills, defineCustomElements } from '@telekom/scale-components/loader'

applyPolyfills().then(() => {
  defineCustomElements(window)
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
