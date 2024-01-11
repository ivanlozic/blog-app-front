import NotFoundPage from '../pages/404/NotFoundPage'
import ContributePage from '../pages/contribute-page/ContributePage'
import HomePage from '../pages/home-page/HomePage'
import RegisterPage from '../pages/register-page/RegisterPage'
import SinglePostPage from '../pages/single-post-page/SinglePostPage'

export const Routes = {
  HOME: '/',
  SINGLE_POST: '/posts/:id',
  CONTRIBUTE: '/contribute',
  REGISTER: '/register',
  NOT_FOUND: '*'
}

const routesList = [
  {
    path: Routes.HOME,
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
    path: Routes.REGISTER,
    element: <RegisterPage />
  },
  {
    path: Routes.NOT_FOUND,
    element: <NotFoundPage />
  }
]

export default routesList
