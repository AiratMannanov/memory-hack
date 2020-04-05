import React from 'react'


import './personalInfo.scss'

const PersonalInfo = () => {
  return (
    <div className="personal-info-container">
      <div className="img-wrapper">
        <img src='https://roadheroes.storage.yandexcloud.net/dca8e4af17a13ed9b7d1ce8a8e0fde9a_origin.jpg' />
      </div>
      <div className="info-wrapper">

        <div className="inside-wrapper">
          <div>
            <p className="info-title main-title">Тулькибаев Барлыбай Оспанович</p>
          </div>
          <div>
            <p className="info-title">Год рождения</p>
            <p className="info-content">test test</p>
          </div>
          <div>
            <p className="info-title">Место призыва</p>
            <p className="info-content">test test</p>
          </div>
          <div>
            <p className="info-title">Дата призыва</p>
            <p className="info-content">test test</p>
          </div>
          <div>
            <p className="info-title">Воинское звание</p>
            <p className="info-content">test test</p>
          </div>
          <div>
            <p className="info-title">Место службы</p>
            <p className="info-content">test test</p>
          </div>
          <div>
            <p className="info-title">Дата смерти</p>
            <p className="info-content">test test</p>
          </div>
          <div>
            <p className="info-title">Ссылки с проектов</p>
            <p className="info-content">test test</p>
          </div>
          <div>
            <p className="info-title">История</p>
            <p className="info-content">test test</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
