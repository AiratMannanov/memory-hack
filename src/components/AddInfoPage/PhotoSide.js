import React, { useState } from 'react'
import { storage } from '../../firebase/firebase'
import { connect } from "react-redux";
import { setInfo } from '../../redux/actions/actions';
import axios from 'axios'
import firebase from 'firebase'

import './main.scss'
import './photoSide.scss'

function guidGenerator() {
  const S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

const PhotoSide = (props) => {

  const { personInfo, setInfo, info } = props

  const [url, setUrl] = useState('');
  const [photoUpload, setPhotoUpload] = useState(false)

  const updateUpload = 0;


  const handleChange = async (e) => {
    e.persist()

    if (e.target.files[0]) {
      let data = guidGenerator()
      const person = {
        firstName: personInfo.firstName,
        lastName: personInfo.lastName,
        middleName: personInfo.middleName,
        dateOfBirthday: personInfo.dateOfBirthday,
        dateOfDeath: personInfo.dateOfDeath,
        dateOfСonscription: personInfo.dateOfСonscription,
        placeOfRecruitment: personInfo.placeOfRecruitment,
        motherCity: personInfo.motherCity,
        dutyPlace: personInfo.dutyPlace,
        militaryRank: personInfo.militaryRank,
        historyAboutPerson: personInfo.historyAboutPerson,
        additionalLinks: personInfo.additionalLinks,
        email: personInfo.email,
        images: data,
      }
      if (personInfo.firstName !== null && personInfo.lastname !== null) {
        setInfo(person)
        await firebase.database().ref(`${data}`).update(person)
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
        const allPeople = (await firebase.database().ref().once('value')).val()
        const res = Object.values(allPeople).filter(el => el.firstName === personInfo.firstName && el.lastName === personInfo.lastName && el.images !== data).map(el => el.images)
        Promise.all(res.map(el => storage.ref(`${el}`).getDownloadURL())).then(arrayUrl => {
          console.log(arrayUrl);

          // axios.post('/user', {
          //   arrayUrl,
          //   userUrl: personInfo.images,
          // }).then(resUrls => console.log(resUrls)).catch(e => console.log(e))
        })
      } else {
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
        setInfo({
          images: data,
        })
      }
    }
  }

  return (
    <div className="photo-side">
      <p>Добавление фотографии <br /> Героя войны</p>
      <div className="photo-input-form">
        {!photoUpload && <i className="ion-ios-person" />}
        <div className="file-upload-form">
          <input id="file-upload" type="file" name="fileUpload" onChange={handleChange} />
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

const mapStateToProps = state => ({
  personInfo: state.personInfo,
});

const mapDispatchToProps = dispatch => ({
  setInfo: (payload) => dispatch(setInfo(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoSide)
