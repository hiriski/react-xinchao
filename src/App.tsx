import { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import Cookies from 'js-cookie'
import routes from './lib/routes'
import { useAppSelector } from './store/hook'
import { ACCESS_TOKEN } from './utils/constants'

const App: FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth)
  const accessToken = Cookies.get(ACCESS_TOKEN) !== undefined || Cookies.get(ACCESS_TOKEN) !== null

  const isLoggedIn = (isAuth: boolean, token: boolean): boolean => {
    if (!isAuth || !token) return false
    return isAuth && token
  }

  return useRoutes(routes(isLoggedIn(isAuthenticated, accessToken)))
}

export default App
