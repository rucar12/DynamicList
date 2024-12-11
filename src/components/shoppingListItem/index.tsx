import { FC } from 'react'
import styles from './ShoppingListItem.module.scss'

interface ShoppingListItemProps {
  id: number
  name: string
  quantity: number
  onRemove: (id: number) => void
}

export const ShoppingListItem: FC<ShoppingListItemProps> = ({
  id,
  name,
  quantity,
  onRemove,
}) => {
  return (
    <li className={styles.item}>
      <span>
        {name} - Quantity: {quantity}
      </span>
      <button onClick={() => onRemove(id)}>Remove</button>
    </li>
  )
}
