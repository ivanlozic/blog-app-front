import NotFoundPage from '../pages/404/NotFoundPage'
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
  },
  {
    path: Routes.NOT_FOUND,
    element: <NotFoundPage />
  }
]

export default routesList
