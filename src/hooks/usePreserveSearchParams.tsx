import { useLocation, useNavigate } from 'react-router-dom'

export const usePreserveSearchParams = () => {
  const navigate = useNavigate()
  const { search } = useLocation()

  const navigateWithParams = (path: string) => {
    navigate(`${path}${search}`)
  }

  return navigateWithParams
}
