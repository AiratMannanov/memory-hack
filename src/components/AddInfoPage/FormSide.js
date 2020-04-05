import React, { useRef } from 'react'
import { connect } from "react-redux";
import { setInfo } from '../../redux/actions/actions';
import { storage } from '../../firebase/firebase'
import firebase from 'firebase'
import axios from 'axios'

import './formSide.scss'

const FormSide = (props) => {

  const { personInfo, setInfo } = props;

  const firstName = useRef(null);
  const lastName = useRef(null);
  const middleName = useRef(null);
  const dateOfBirthday = useRef(null);
  const dateOfDeath = useRef(null);
  const dateOfСonscription = useRef(null);
  const placeOfRecruitment = useRef(null);
  const motherCity = useRef(null);
  const dutyPlace = useRef(null);
  const militaryRank = useRef(null);
  const historyAboutPerson = useRef(null);
  const additionalLinks = useRef(null);
  const email = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault()
    if (personInfo.images) {
      const person = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        middleName: middleName.current.value,
        dateOfBirthday: dateOfBirthday.current.value,
        dateOfDeath: dateOfDeath.current.value,
        dateOfСonscription: dateOfСonscription.current.value,
        placeOfRecruitment: placeOfRecruitment.current.value,
        motherCity: motherCity.current.value,
        dutyPlace: dutyPlace.current.value,
        militaryRank: militaryRank.current.value,
        historyAboutPerson: historyAboutPerson.current.value,
        additionalLinks: additionalLinks.current.value,
        email: email.current.value,
        images: personInfo.images,
      }
      setInfo(person)
      await firebase.database().ref(`${personInfo.images}`).update(person)
      const allPeople = (await firebase.database().ref().once('value')).val()
      const userUrl = await storage.ref(`${personInfo.images}`).getDownloadURL()
      const res = Object.values(allPeople).filter(el => el.firstName === firstName.current.value && el.lastName === lastName.current.value && el.images !== personInfo.images).map(el => el.images);
      Promise.all(res.map(async (el) => {
        const url = await storage.ref(`${el}`).getDownloadURL()
        return {
          url,
          key:el,
        }
      })).then(arrayUsers => {   
        // axios.post('/user', {
        //   arrayUsers,
        //   user: {
        //     url: userUrl,
        //     key: personInfo.images
        //   },
        // }).then(resUrls => console.log(resUrls)).catch(e => console.log(e))
      })

    } else {
      setInfo({
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        middleName: middleName.current.value,
        dateOfBirthday: dateOfBirthday.current.value,
        dateOfDeath: dateOfDeath.current.value,
        dateOfСonscription: dateOfСonscription.current.value,
        placeOfRecruitment: placeOfRecruitment.current.value,
        motherCity: motherCity.current.value,
        dutyPlace: dutyPlace.current.value,
        militaryRank: militaryRank.current.value,
        historyAboutPerson: historyAboutPerson.current.value,
        additionalLinks: additionalLinks.current.value,
        email: email.current.value,
        images: null,
      })
    }
  }

  return (
    <div className="form-side">
      <p>Добавление информации<br />о Герое войны</p>
      <form onSubmit={submitForm}>
        <div className="inputGroup">
          <input type="text" ref={firstName} placeholder="Фамилия" required />
          <input type="text" ref={lastName} placeholder="Имя" required />
        </div>

        <div className="inputGroup">
          <input type="text" ref={middleName} placeholder="Отчество" />
          <input type="text" ref={dateOfBirthday} placeholder="Год / Дата рождения" />
        </div>

        <div className="inputGroup">
          <input type="text" ref={motherCity} placeholder="Местро рождения / Область" />
          <input type="text" ref={placeOfRecruitment} placeholder="Местро призыва / Область" />
        </div>

        <div className="inputGroup">
          <input type="text" ref={dateOfСonscription} placeholder="Год / Дата призыва" />
          <input type="text" ref={dutyPlace} placeholder="Местро службы" />
        </div>

        <div className="inputGroup">
          <input type="text" ref={militaryRank} placeholder="Воинское звание" />
          <input type="text" ref={dateOfDeath} placeholder="Год / Дата смерти" />
        </div>

        <div className="inputGroup singleInput">
          <input type="text" ref={historyAboutPerson} placeholder="История героя" />
        </div>

        <div className="inputGroup singleInput">
          <input type="text" ref={additionalLinks} placeholder="Ссылки со сторонних проектов" />
        </div>

        <div className="inputGroup singleInput">
          <input type="email" ref={email} placeholder="E-mail для доступа в личный кабинет" required />
        </div>
        <button type="submit" >Сохранить</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  personInfo: state.personInfo
});

const mapDispatchToProps = (dispatch) => ({
  setInfo: (payload) => dispatch(setInfo(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSide)
