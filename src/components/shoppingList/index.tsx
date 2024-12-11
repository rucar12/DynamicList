import styles from './ShoppingList.module.scss'
import { useShoppingList } from '../../context/ShoppingListContext'
import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { Button } from '../button'

export const ShoppingList: FC = () => {
  const { items, deleteItem } = useShoppingList()

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const groupedItems = items.reduce(
    (acc, item) => {
      acc[item.category] = acc[item.category] || []
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, typeof items>
  )

  return (
    <div className={styles.list}>
      <h1>Shopping List</h1>
      <Button onClick={() => navigate('/create')}>Create new product</Button>
      {Object.entries(groupedItems)
        .filter(([category, _]) =>
          searchParams.get('category')
            ? category === searchParams.get('category')
            : items
        )
        .map(([category, categoryItems]) => (
          <div key={category}>
            <h3>{category}</h3>
            <ul>
              {categoryItems.map((item) => {
                return (
                  <li key={item.id}>
                    <Link to={`/${item.id}`}>
                      {item.name} - Quantity: {item.quantity}
                    </Link>
                    <Button onClick={() => navigate(`/edit/${item.id}`)}>
                      Edit
                    </Button>
                    <Button onClick={() => deleteItem(item.id)}>Remove</Button>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
    </div>
  )
}
