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
            <p className="info-content">1924</p>
          </div>
          <div>
            <p className="info-title">Место призыва</p>
            <p className="info-content">Азовский РВК Омской области</p>
          </div>
          <div>
            <p className="info-title">Дата призыва</p>
            <p className="info-content">26.08.1942</p>
          </div>
          <div>
            <p className="info-title">Воинское звание</p>
            <p className="info-content">гвардии старший сержант</p>
          </div>
          <div>
            <p className="info-title">Место службы</p>
            <p className="info-content">52 Гв. стр. полк 17 гв. стр. Кр.Зн. дивизии</p>
          </div>
          <div>
            <p className="info-title">Дата смерти</p>
            <p className="info-content">пропал без вести 02.01.1945</p>
          </div>
          <div>
            <p className="info-title">Ссылки с проектов</p>
            <p className="info-content"></p>
          </div>
          <div>
            <p className="info-title">История</p>
            <p className="info-content">Тулькибаев Барлыбай в боях за деревню Якусин 25.06.1944 г. и при отражении контратак противника в районе деревни Рудаки 26.06.1944г. Витебского района Витебской области, будучи связным от батальона до роты под сильным артиллерийским огнем своевременно передавал все приказы и донесения, обеспечивая управление боем. Лично участвовал при отражении контратак огнем из автомата, уничтожил семь солдат и офицеров противника. Удостоен правительственной наградой орденом "Красная Звезда". В боях с немецкими захватчиками 06.10.1944 г. в районе деревни Колнуи Росейняйского уезда Литовской ССР во время атаки уничтожил трех немецких солдат. Во время жаркого боя спас жизнь своего командира роты, который был тяжело ранен. И вынес боевого офицера под сильным огнем противника. За смелость и отвагу в бою награжден орденом "Славы III степени".
</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
