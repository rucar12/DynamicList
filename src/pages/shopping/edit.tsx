import { Modal } from '../../components/modal'
import { CustomForm } from '../../components'
import { useParams, useNavigate } from 'react-router-dom'

const ShoppingEditPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const onFinish = () => {
    navigate('/')
  }

  return (
    <Modal isOpen={true} onClose={onFinish}>
      <CustomForm editingItemId={id} redirect={onFinish} />
    </Modal>
  )
}

export default ShoppingEditPage
