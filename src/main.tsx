import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss'
import { ShoppingListProvider } from './context/ShoppingListContext.tsx'
import { RouterProvider } from 'react-router-dom'
import { routes } from './services/routes.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShoppingListProvider>
      <RouterProvider router={routes} />
    </ShoppingListProvider>
  </StrictMode>
)
