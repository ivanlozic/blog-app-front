import HomePage from '../pages/HomePage'

export const Routes = {
  ROOT: '/',
  NOT_FOUND: '*'
}

const routesList = [
  {
    path: Routes.ROOT,
    element: <HomePage />
  }
]

export default routesList
