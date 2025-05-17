import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// No need to import index.css if App.jsx imports variables.css & App.css
// and those cover global styles. Vite's default index.css can be removed or cleared.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
