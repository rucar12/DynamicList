import { createBrowserRouter } from 'react-router'
import { lazy } from 'react'

const ShoppingList = lazy(() => import('../pages/shopping/list.tsx'))
const ShoppingListEdit = lazy(() => import('../pages/shopping/edit.tsx'))
const ShoppingListCreate = lazy(() => import('../pages/shopping/create.tsx'))
const ShoppingPage = lazy(() => import('../pages/shopping/page/page.tsx'))

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: ShoppingList,
    children: [
      {
        path: '/edit/:id',
        Component: ShoppingListEdit,
      },
      {
        path: '/create',
        Component: ShoppingListCreate,
      },
    ],
  },
  {
    path: '/:id',
    Component: ShoppingPage,
  },
])
