import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CreatePost, Home } from './pages'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  <React.StrictMode>
    <CreatePost />
  </React.StrictMode>,
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
