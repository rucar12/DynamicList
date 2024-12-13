import { FormEvent, useEffect, useState } from 'react'
import { useShoppingList } from '../../context/ShoppingListContext.tsx'
import { Form } from 'react-router-dom'
import { Button, ButtonTypes } from '../button'
import { Input } from '../input'
import { Select } from '../select'
import { categories } from '../../data/categories.ts'
import { InputNumber } from '../inputNumber'
import styles from './Form.module.scss'

interface FormProps {
  editingItemId?: string | null
  redirect?: () => void
}

export const CustomForm: React.FC<FormProps> = ({
  editingItemId,
  redirect,
}) => {
  const { createItem, editItem, items } = useShoppingList()

  // Form values
  const [name, setName] = useState<string | undefined>(undefined)
  const [quantity, setQuantity] = useState<number>(0)
  const [category, setCategory] = useState<string | undefined>(undefined)

  // Form errors
  const [errorName, setErrorName] = useState<string | undefined>(undefined)
  const [errorQuantity, setErrorQuantity] = useState<string | undefined>(
    undefined
  )
  const [errorCategory, setErrorCategory] = useState<string | undefined>(
    undefined
  )

  const currentItem = items.find((item) => item.id === editingItemId)

  useEffect(() => {
    if (editingItemId && currentItem) {
      setCategory(currentItem.category)
      setName(currentItem.name)
      setQuantity(currentItem.quantity)
    }
  }, [editingItemId, currentItem])

  const handleAddOrEditItem = (e: FormEvent) => {
    e.preventDefault()

    !name ? setErrorName('* Please fill item name') : setErrorName(undefined)
    quantity <= 0
      ? setErrorQuantity('* Please fill item quantity')
      : setErrorQuantity(undefined)
    !category
      ? setErrorCategory('* Please fill item category')
      : setErrorCategory(undefined)

    if (!name || quantity <= 0 || !category) {
      return
    }

    if (name && quantity && category) {
      if (editingItemId) {
        editItem({
          name,
          quantity,
          category,
          id: editingItemId,
          purchased: currentItem?.purchased ?? false,
        })
        !!redirect && redirect()
      } else {
        createItem({
          name,
          quantity,
          category,
          id: Date.now().toString(),
          purchased: false,
        })
        !!redirect && redirect()
      }
    }

    // setName(undefined)
    // setCategory(undefined)
    // setQuantity(0)
  }

  return (
    <Form onSubmit={handleAddOrEditItem} className={styles.form}>
      <Input
        label={'Name *'}
        placeholder={'Item Name'}
        value={name ?? ''}
        error={errorName}
        onChange={(e) => setName(e.target.value)}
      />
      <InputNumber
        value={quantity ? Number(quantity) : 0}
        onChange={(value) => setQuantity(value)}
        error={errorQuantity}
        min={0}
        max={999}
        label={'Quantity *'}
      />
      <Select
        error={errorCategory}
        label={'Category *'}
        options={categories}
        value={category ?? ''}
        onChange={(e) => setCategory(e.target.value)}
      />
      <div className={styles.buttons}>
        <Button type="submit" customTypes={ButtonTypes.default}>
          {editingItemId ? 'Save Changes' : 'Add Item'}
        </Button>
        <Button customTypes={ButtonTypes.primary} onClick={redirect}>
          Cancel
        </Button>
      </div>
    </Form>
  )
}
