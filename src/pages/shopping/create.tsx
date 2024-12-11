import { Modal } from '../../components/modal'
import { CustomForm } from '../../components'
import { useNavigate } from 'react-router-dom'

const ShoppingCreatePage = () => {
  const navigate = useNavigate()

  const onFinish = () => {
    navigate('/')
  }

  return (
    <Modal isOpen={true} onClose={onFinish}>
      <CustomForm redirect={onFinish} />
    </Modal>
  )
}

export default ShoppingCreatePage
