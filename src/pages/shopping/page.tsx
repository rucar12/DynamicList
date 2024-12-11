import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '../../components'

const ShoppingPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <p>Item {id}</p>
    </div>
  )
}

export default ShoppingPage
