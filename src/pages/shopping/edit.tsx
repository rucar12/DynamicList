import { Modal } from '../../components'
import { CustomForm } from '../../components'
import { useParams } from 'react-router-dom'
import { usePreserveSearchParams } from '../../hooks/usePreserveSearchParams.tsx'

const ShoppingEditPage = () => {
  const { id } = useParams()
  const navigateWithParams = usePreserveSearchParams()

  const onFinish = () => {
    navigateWithParams('/')
  }

  return (
    <Modal title={<h2>Edit product</h2>} isOpen={true} onClose={onFinish}>
      <CustomForm editingItemId={id} redirect={onFinish} />
    </Modal>
  )
}

export default ShoppingEditPage
