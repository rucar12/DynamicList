import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../../components'
import styles from './ShoppingPage.module.scss'
import { useShoppingList } from '../../../context/ShoppingListContext.tsx'
import { ButtonSizes, ButtonTypes } from '../../../components/button'
import { BackArrowSVG } from '../../../components/icons'

const ShoppingPage = () => {
  const { id } = useParams()
  const { items } = useShoppingList()
  const navigate = useNavigate()

  const fakeProduct = {
    id,
    description: 'Fresh organic apples grown with care in eco-friendly farms.',
    price: '$3.99 per lb',
  }

  const currentProduct = items.find((item) => item.id === id)

  if (!currentProduct) return <p>Loading...</p>

  return (
    <div className={styles.page}>
      <div className={styles.decorate1} />
      <div className={styles.decorate2} />
      <Button
        onClick={() => navigate(-1)}
        customTypes={ButtonTypes.primary}
        size={ButtonSizes.small}
        className={styles.backButton}
      >
        <BackArrowSVG /> Back
      </Button>

      <div className={styles.card}>
        <div className={styles.imageContainer}></div>

        <div className={styles.detailsContainer}>
          <h1 className={styles.title}>{currentProduct.name}</h1>
          <p className={styles.category}>Category: {currentProduct.category}</p>
          <p className={styles.description}>{fakeProduct.description}</p>
          <p className={styles.quantity}>
            Available Quantity:{' '}
            <span className={styles.generalColor}>
              {currentProduct.quantity}
            </span>
          </p>
          <p className={styles.price}>
            Price:{' '}
            <span className={styles.generalColor}>{fakeProduct.price}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ShoppingPage
