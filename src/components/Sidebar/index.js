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
        <Link to="/" className="link-sidebar">
          Личный кабинет
        </Link >
        <Link to="/" className="link-sidebar">
          Добавить фото
        </Link >
        <Link to="/tree" className="link-sidebar">
          Генеалогическое древо
        </Link >
      </ul>
    </div>
  )
}

export default Navbar
