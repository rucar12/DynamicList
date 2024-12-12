import styles from './ShoppingList.module.scss'
import {
  ShoppingItem,
  useShoppingList,
} from '../../context/ShoppingListContext'
import { FC, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button, ButtonSizes, ButtonTypes } from '../button'
import { Filter } from '../filter'
import { usePreserveSearchParams } from '../../hooks/usePreserveSearchParams.tsx'
import { CreateSVG, DeleteSVG, EditSVG, InCartSVG, ToCartSVG } from '../icons'

export const ShoppingList: FC = () => {
  const { items, deleteItem, editItem } = useShoppingList()

  const [selectedFilter, setSelectedFilter] = useState('')

  const [searchParams] = useSearchParams()

  const navigateWithParams = usePreserveSearchParams()

  const groupedItems = items.reduce(
    (acc, item) => {
      acc[item.category] = acc[item.category] || []
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, typeof items>
  )

  const handleCreateClick = () => {
    navigateWithParams('/create')
  }

  const handleEditClick = (id: string) => {
    navigateWithParams(`/edit/${id}`)
  }

  const handlePurchaseClick = (item: ShoppingItem) => {
    editItem({ ...item, purchased: !item.purchased })
  }

  return (
    <div className={styles.list}>
      {/*Background circles*/}
      <div className={styles.topDecorate} />
      <div className={styles.topDecorateDoubled} />
      <div className={styles.bottomDecorate1} />
      <div className={styles.bottomDecorate2} />
      <div className={styles.bottomDecorate3} />
      {/**/}
      <h1>Shopping List</h1>
      <div className={styles.topBar}>
        <Filter
          selectedCategory={selectedFilter}
          setSelectedCategory={setSelectedFilter}
        />
        <Button onClick={handleCreateClick} variant="primary">
          <CreateSVG /> Create New Product
        </Button>
      </div>
      <div className={styles.tableContainer}>
        {Object.entries(groupedItems)
          .filter(([category, _]) =>
            searchParams.get('category')
              ? category === searchParams.get('category')
              : items
          )
          .map(([category, categoryItems]) => (
            <div key={category} className={styles.categoryGroup}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.table}>
                <div className={styles.header}>
                  <span>Name</span>
                  <span>Quantity</span>
                  <span>Actions</span>
                </div>
                {categoryItems.map((item) => {
                  return (
                    <div className={styles.row} key={item.id}>
                      <span>
                        <Link to={`/${item.id}`}>{item.name}</Link>
                      </span>
                      <span>{item.quantity}</span>
                      <span className={styles.actions}>
                        <Button
                          size={ButtonSizes.small}
                          onClick={() => handleEditClick(item.id)}
                          title={'Edit product info'}
                        >
                          <EditSVG />
                        </Button>
                        <Button
                          size={ButtonSizes.small}
                          onClick={() => handlePurchaseClick(item)}
                          customTypes={
                            item.purchased
                              ? ButtonTypes.primary
                              : ButtonTypes.default
                          }
                        >
                          {item.purchased ? <InCartSVG /> : <ToCartSVG />}
                        </Button>
                        <Button
                          size={ButtonSizes.small}
                          onClick={() => deleteItem(item.id)}
                          title={'Delete product'}
                          customTypes={ButtonTypes.primary}
                        >
                          <DeleteSVG />
                        </Button>
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
