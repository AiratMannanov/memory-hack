import React from 'react'
import {connect} from 'react-redux'
import './main.scss'

const PhotoSide = React.lazy(() => import('./PhotoSide'));
const FormSide = React.lazy(() => import('./FormSide'));



const AddInfoPage = (props) => {

  const { personInfo } = props

  return (
    <div className="add-photo-form-container">
      <PhotoSide info={personInfo}/>
      <FormSide info={personInfo}/>
    </div>
  )
}

const mapStateToProps = state => ({
  personInfo: state.personInfo,
});

export default connect(mapStateToProps)(AddInfoPage)
