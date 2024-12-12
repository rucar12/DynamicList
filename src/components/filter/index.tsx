import { useShoppingList } from '../../context/ShoppingListContext.tsx'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Select } from '../select'
import styles from './Filter.module.scss'

interface FilterProps {
  selectedCategory: string
  setSelectedCategory: Dispatch<SetStateAction<string>>
}

export const Filter: FC<FilterProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const { items } = useShoppingList()
  const categories = Array.from(new Set(items.map((item) => item.category)))
  const filterOptions = [
    { value: '', label: 'All' },
    ...categories.map((item) => ({ value: item, label: item })),
  ]

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const categoryFromURL = searchParams.get('category') || ''
    setSelectedCategory(categoryFromURL)
  }, [searchParams, setSelectedCategory])

  // Update URL when the filter is changed
  const handleFilterChange = (category: string) => {
    setSelectedCategory(category)
    if (category) {
      setSearchParams({ category })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div className={styles.filter}>
      <h3>Filter category:</h3>
      <Select
        options={filterOptions}
        value={selectedCategory ?? ''}
        onChange={(e) => handleFilterChange(e.target.value)}
      />
    </div>
  )
}
