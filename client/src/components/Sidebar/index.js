import React from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './sidebar.scss'

const Navbar = ({ personInfo }) => {
  return (
    <div className="sidebar-container">
      <ul>
      {

      !personInfo.firstName && <Link to="/" className="link-sidebar">
          Главная страница
        </Link >
      }

        <Link to="/addinfo" className="link-sidebar">
          Добавить Героя
        </Link >
        {
          personInfo.firstName && <Link to="/info/123" className="link-sidebar">
          Мои Герои
        </Link >
        }
        {
          personInfo.firstName && <Link to="/relatives/123" className="link-sidebar">
          Ваши совпадения
        </Link >
        }
        {
          personInfo.firstName && <Link to="/tree" className="link-sidebar">
          Древо памяти
        </Link >
        }
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  personInfo: state.personInfo
});

export default connect(mapStateToProps)(Navbar)
