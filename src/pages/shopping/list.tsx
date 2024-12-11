import { ShoppingList } from '../../components'
import { useShoppingList } from '../../context/ShoppingListContext.tsx'
import { Outlet } from 'react-router-dom'

const ShoppingListPage = () => {
  const { items, deleteItem } = useShoppingList()

  if (!items.length) return 'Loading...'

  return (
    <>
      <ShoppingList />
      <Outlet />
    </>
  )
}

export default ShoppingListPage
