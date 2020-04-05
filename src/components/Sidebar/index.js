import React from 'react'
import { Link } from "react-router-dom";
import './sidebar.scss'

const Navbar = () => {
  return (
    <div className="sidebar-container">
      <ul>
        <Link to="/" className="link-sidebar">
          Главная страница
        </Link >
        <Link to="/info/123" className="link-sidebar">
          Личный кабинет
        </Link >
        <Link to="/addinfo" className="link-sidebar">
          Добавить фото
        </Link >
        <Link to="/tree" className="link-sidebar">
          Древо памяти
        </Link >
      </ul>
    </div>
  )
}

export default Navbar
