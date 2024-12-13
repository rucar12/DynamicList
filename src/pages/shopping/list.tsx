import { ShoppingList } from '../../components'
import { useShoppingList } from '../../context/ShoppingListContext.tsx'
import { Outlet } from 'react-router-dom'

const ShoppingListPage = () => {
  const { items } = useShoppingList()

  if (!items.length) return 'Loading...'

  return (
    <>
      <ShoppingList />
      <Outlet />
    </>
  )
}

export default ShoppingListPage
