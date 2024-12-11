import {
  useState,
  createContext,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'
import MOCK_ITEMS from '../data/mocks.json'

export type ShoppingItem = {
  id: number
  name: string
  quantity: number
  category: string
}

type ShoppingListContextType = {
  items: ShoppingItem[]
  setItems: Dispatch<SetStateAction<ShoppingItem[]>>
  deleteItem: (id: number) => void
  createItem: (data: ShoppingItem) => void
  editItem: (data: ShoppingItem) => void
}

// Context for managing the shopping list
const ShoppingListContext = createContext<ShoppingListContextType | undefined>(
  undefined
)

export const ShoppingListProvider = ({ children }) => {
  const [items, setItems] = useState<ShoppingItem[]>([])

  useEffect(() => {
    const localItems = localStorage.getItem('products')

    if (!localItems || !JSON.parse(localItems).length) {
      setItems(MOCK_ITEMS)
      localStorage.setItem('products', JSON.stringify(MOCK_ITEMS))
    } else {
      setItems(JSON.parse(localItems))
    }
  }, [])

  const deleteItem = (id: number) => {
    const updatedItems = items.filter((prev) => prev.id !== id)
    setItems(updatedItems)
    localStorage.setItem('products', JSON.stringify(updatedItems))
  }

  const createItem = (data: ShoppingItem) => {
    const updatedItems = [...items, data]
    setItems(updatedItems)
    localStorage.setItem('products', JSON.stringify(updatedItems))
  }

  const editItem = (data: ShoppingItem) => {
    const updatedItems = items.map((prev) => {
      return Number(prev.id) === data.id
        ? {
            ...prev,
            ...data,
          }
        : prev
    })
    setItems(updatedItems)
    localStorage.setItem('products', JSON.stringify(updatedItems))
  }

  return (
    <ShoppingListContext.Provider
      value={{ items, setItems, deleteItem, createItem, editItem }}
    >
      {children}
    </ShoppingListContext.Provider>
  )
}

export const useShoppingList = () => {
  const context = useContext(ShoppingListContext)
  if (!context) {
    throw new Error(
      'Shopping List hook must be used within a ShoppingListProvider'
    )
  }
  return context
}
