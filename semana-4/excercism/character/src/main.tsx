import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import CharacterGenerator from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CharacterGenerator></CharacterGenerator>
  </React.StrictMode>,
)
