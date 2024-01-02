import HomePage from '../pages/home-page/HomePage'
import SinglePostPage from '../pages/single-post-page/SinglePostPage'

export const Routes = {
  ROOT: '/',
  SINGLE_POST: '/posts/:id',
  NOT_FOUND: '*'
}

const routesList = [
  {
    path: Routes.ROOT,
    element: <HomePage />
  },
  {
    path: Routes.SINGLE_POST,
    element: <SinglePostPage />
  }
]

export default routesList
