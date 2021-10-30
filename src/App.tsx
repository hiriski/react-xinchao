import { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './lib/routes'

const App: FC = () => {
  return useRoutes(routes(false))
}

export default App
