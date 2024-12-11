import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react'
import {
  ShoppingItem,
  useShoppingList,
} from '../../context/ShoppingListContext.tsx'
import { Form, useSearchParams } from 'react-router-dom'
import { Button } from '../button'

interface FormProps {
  editingItemId?: number | string | null
  redirect?: () => void
}

export const CustomForm: React.FC<FormProps> = ({
  editingItemId,
  redirect,
}) => {
  const { createItem, editItem, items } = useShoppingList()

  // Form values
  const [name, setName] = useState<string | undefined>(undefined)
  const [quantity, setQuantity] = useState<number | undefined>(undefined)
  const [category, setCategory] = useState<string | undefined>(undefined)

  // Form errors
  const [errorName, setErrorName] = useState<string | undefined>(undefined)
  const [errorQuantity, setErrorQuantity] = useState<string | undefined>(
    undefined
  )
  const [errorCategory, setErrorCategory] = useState<string | undefined>(
    undefined
  )

  useEffect(() => {
    if (editingItemId) {
      const currentItem = items.find((item) => item.id === editingItemId)
      setCategory(currentItem.category)
      setName(currentItem.name)
      setQuantity(currentItem.quantity)
    }

    return () => {
      setCategory(undefined)
      setName(undefined)
      setQuantity(undefined)
    }
  }, [editingItemId])

  const handleAddOrEditItem = (e: FormEvent) => {
    e.preventDefault()

    !name ? setErrorName('Please fill item name') : setErrorName(undefined)
    quantity <= 0
      ? setErrorQuantity('Please fill item quantity')
      : setErrorQuantity(undefined)
    !category
      ? setErrorCategory('Please fill item category')
      : setErrorCategory(undefined)

    if (!name || quantity <= 0 || !category) {
      return
    }

    if (name && quantity && category) {
      if (editingItemId) {
        editItem({ name, quantity, category, id: Number(editingItemId) })
        !!redirect && redirect()
      } else {
        createItem({ name, quantity, category, id: Date.now() })
        !!redirect && redirect()
      }
    }

    setName(undefined)
    setCategory(undefined)
    setQuantity(undefined)
  }

  return (
    <Form onSubmit={handleAddOrEditItem}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <select
        name={'category'}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
      </select>
      <Button type="submit">
        {editingItemId ? 'Save Changes' : 'Add Item'}
      </Button>
    </Form>
  )
}
