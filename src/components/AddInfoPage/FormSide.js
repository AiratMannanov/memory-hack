import React, { useRef } from 'react'

import './formSide.scss'

const FormSide = () => {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const middleName = useRef(null);
  const dateOfBirthday = useRef(null);
  const dateOfDeath = useRef(null);
  const dateOfСonscription = useRef(null);
  const motherCity = useRef(null);
  const dutyPlace = useRef(null);
  const militaryRank = useRef(null);
  const historyAboutPerson = useRef(null);
  const additionalLinks = useRef(null);
  const email = useRef(null);


  return (
    <div className="form-side">
      <p>Добавление информации<br />о Герое войны</p>
      <form>
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

export default FormSide
