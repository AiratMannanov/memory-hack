import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


import './personalInfo.scss'

const PersonalInfo = (props) => {

  const { personInfo} = props;
  console.log(personInfo);
  
  return (
    <div className="personal-info-container">
      <div className="img-wrapper">
        {personInfo.images === null ? null : <img src={personInfo.url} alt="hero" />}
      </div>
      {personInfo.images === null ? <div style={{marginTop: 100+'px'}}>Вы можете <Link to="/addinfo">Добавить героя</Link></div>
      :<div className="info-wrapper">

        <div className="inside-wrapper">
          <div>
            <p className="info-title main-title">{personInfo.lastName} {personInfo.firstName} {personInfo.middleName}</p>
          </div>
          <div>
            <p className="info-title">Год рождения</p>
            <p className="info-content">{personInfo.dateOfBirthday}</p>
          </div>
          <div>
            <p className="info-title">Место призыва</p>
            <p className="info-content">{personInfo.placeOfRecruitment}</p>
          </div>
          <div>
            <p className="info-title">Дата призыва</p>
            <p className="info-content">{personInfo.dateOfСonscription}</p>
          </div>
          <div>
            <p className="info-title">Воинское звание</p>
  <p className="info-content">{personInfo.militaryRank}</p>
          </div>
          <div>
            <p className="info-title">Место службы</p>
            <p className="info-content">{personInfo.dutyPlace}</p>
          </div>
          <div>
            <p className="info-title">Дата смерти</p>
            <p className="info-content">{personInfo.dateOfDeath}</p>
          </div>
          <div>
            <p className="info-title">{personInfo.additionalLinks}</p>
            <p className="info-content"></p>
          </div>
          <div>
            <p className="info-title">История</p>
          <p className="info-content">{personInfo.historyAboutPerson}</p>
          </div>
        </div>
      </div>}
    </div>
  )
}

const mapStateToProps = state => ({
  personInfo: state.personInfo,
});


export default connect(mapStateToProps)(PersonalInfo)
