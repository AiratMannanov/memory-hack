import React from 'react'


import './main.scss'
import './photoSide.scss'

const PhotoSide = () => {
  const photoUpload = false;
  const updateUpload = 0;
  return (
    <div className="photo-side">
      <p>Добавление фотографии <br /> Героя войны</p>
      <div className="photo-input-form">
        <i className="ion-ios-person" />
        <div className="file-upload-form">
          <input id="file-upload" type="file" name="fileUpload" />
          <label htmlFor="file-upload" id="file-drag">
            {photoUpload && <img id="file-image" src="#" alt="Preview" className="hidden" />}
            <div id="start">
              <div>Перетащите фотографию <br /> или нажмите</div>
              <i style={{ fontSize: '2rem' }} className="ion-ios-cloud-download" aria-hidden="true"></i>
              <span id="file-upload-btn" className="btn btn-primary">Загрузите фотографию</span>
            </div>
            <div id="response" className="hidden">
              <div id="messages"></div>
              {updateUpload ? <progress className="progress" id="file-progress" value="0.8" /> : ''}
            </div>
          </label>

        </div>
      </div>
    </div >
  )
}

export default PhotoSide
