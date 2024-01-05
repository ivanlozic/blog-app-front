import ContributePage from '../pages/contribute-page/ContributePage'
import HomePage from '../pages/home-page/HomePage'
import SinglePostPage from '../pages/single-post-page/SinglePostPage'

export const Routes = {
  ROOT: '/',
  SINGLE_POST: '/posts/:id',
  CONTRIBUTE: '/contribute',
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
  },
  {
    path: Routes.CONTRIBUTE,
    element: <ContributePage />
  }
]

export default routesList
