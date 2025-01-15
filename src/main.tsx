import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToDoListPage } from './pages/ToDoListPage'

import "./assets/scss/normalize.scss"
import "./assets/scss/style.scss"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoListPage />
  </StrictMode>,
)
