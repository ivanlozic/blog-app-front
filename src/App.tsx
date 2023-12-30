import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

const App = (): JSX.Element => {
  return (
    <div>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  )
}

export default App
