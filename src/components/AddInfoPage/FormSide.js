import React from 'react'

import './formSide.scss'

const FormSide = () => {
  return (
    <div className="form-side">
      <p>Добавление информации<br />о Герое войны</p>
      <form>
        <div className="inputGroup">
          <input type="text" placeholder="Фамилия" />
          <input type="text" placeholder="Имя" />
        </div>

        <div className="inputGroup">
          <input type="text" placeholder="Отчество" />
          <input type="text" placeholder="Год / Дата рождения" />
        </div>

        <div className="inputGroup">
          <input type="text" placeholder="Местро рождения / Область" />
          <input type="text" placeholder="Местро призыва / Область" />
        </div>

        <div className="inputGroup">
          <input type="text" placeholder="Год / Дата призыва" />
          <input type="text" placeholder="Местро службы" />
        </div>

        <div className="inputGroup">
          <input type="text" placeholder="Воинское звание" />
          <input type="text" placeholder="Год / Дата смерти" />
        </div>

        <div className="inputGroup singleInput">
          <input type="text" placeholder="История героя" />
        </div>

        <div className="inputGroup singleInput">
          <input type="text" placeholder="Ссылки со сторонних проектов" />
        </div>

        <div className="inputGroup singleInput">
          <input type="text" placeholder="E-mail для доступа в личный кабинет" />
        </div>
        <button type="submit" >Сохранить</button>
      </form>
    </div>
  )
}

export default FormSide
