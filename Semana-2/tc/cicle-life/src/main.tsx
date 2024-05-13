import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentMount from './componentDidMount.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ComponentMount />
  </React.StrictMode>,
)
