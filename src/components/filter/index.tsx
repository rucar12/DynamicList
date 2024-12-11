import { useShoppingList } from '../../context/ShoppingListContext.tsx'
import { Dispatch, FC, SetStateAction } from 'react'
import { useLocation } from 'react-router-dom'

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

  const location = useLocation()
  const updateURLWithCategory = (category: string) => {
    const url = new URL(window.location.href)
    url.searchParams.set('category', category)
    window.history.pushState({}, '', url)
  }

  return (
    <div className="filter">
      <label>Filter by Category:</label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}
