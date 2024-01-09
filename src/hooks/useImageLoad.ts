import { useState } from 'react'

const useImageLoad = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return {
    imageLoaded,
    handleImageLoad
  }
}

export default useImageLoad
