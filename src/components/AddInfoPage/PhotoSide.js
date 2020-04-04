import React, {useState} from 'react'
import { storage } from '../../firebase/firebase'
import firebase from 'firebase'

import './main.scss'
import './photoSide.scss'

function guidGenerator() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

const PhotoSide = () => {


  const [url, setUrl] = useState('');
  const [photoUpload, setPhotoUpload] = useState(false)

  const updateUpload = 0;


  const handleChange = (e) => {
    e.persist()
    if (e.target.files[0]) {
      
      let data = guidGenerator()

      firebase.database().ref(`${data}`).update({
        data,
        name:'aa',
        surname:'a',
      })
      
      const uploadTask = storage.ref(`${data}`).put(e.target.files[0]);
            
      uploadTask.on('state_changed',
      undefined,
      undefined,
        () => {
          storage.ref(`${data}`).getDownloadURL().then((u) => {
            setUrl(u);
            setPhotoUpload(true)
          });
        });
    }
  };

  return (
    <div className="photo-side">
      <p>Добавление фотографии <br /> Героя войны</p>
      <div className="photo-input-form">
        <i className="ion-ios-person" />
        <div className="file-upload-form">
          <input id="file-upload" type="file" name="fileUpload" onChange={handleChange}/>
          <label htmlFor="file-upload" id="file-drag">
            {photoUpload && <img id="file-image" src={url} alt="Preview" className="hidden" />}
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
