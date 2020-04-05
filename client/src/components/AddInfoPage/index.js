import React from 'react'

import './main.scss'

const PhotoSide = React.lazy(() => import('./PhotoSide'));
const FormSide = React.lazy(() => import('./FormSide'));



const AddInfoPage = () => {
  return (
    <div className="add-photo-form-container">
      <PhotoSide />
      <FormSide />
    </div>
  )
}

export default AddInfoPage
