import { Modal } from '../../components'
import { CustomForm } from '../../components'
import { usePreserveSearchParams } from '../../hooks/usePreserveSearchParams.tsx'

const ShoppingCreatePage = () => {
  const navigateWithParams = usePreserveSearchParams()

  const onFinish = () => {
    navigateWithParams('/')
  }

  return (
    <Modal title={<h2>Create new product</h2>} isOpen={true} onClose={onFinish}>
      <CustomForm redirect={onFinish} />
    </Modal>
  )
}

export default ShoppingCreatePage
