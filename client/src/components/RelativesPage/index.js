import React from 'react'

import './RelativesPage.scss'
import { Link } from 'react-router-dom'

const RelativesPage = () => {
  return (
    <div className="relatives-page-container">
      <h2>Герои, возможно, являются Вашими родственниками</h2>
      <div className="photos-container">
        <Link>
          <img className="photo-of-hero" src="https://roadheroes.storage.yandexcloud.net/dca8e4af17a13ed9b7d1ce8a8e0fde9a_origin.jpg" alt="hero" />
        </Link>
        <Link>
          <img className="photo-of-hero" src="https://roadheroes.storage.yandexcloud.net/dca8e4af17a13ed9b7d1ce8a8e0fde9a_origin.jpg" alt="hero" />
        </Link>
        <Link>
          <img className="photo-of-hero" src="https://roadheroes.storage.yandexcloud.net/dca8e4af17a13ed9b7d1ce8a8e0fde9a_origin.jpg" alt="hero" />
        </Link>
        <Link>
          <img className="photo-of-hero" src="https://roadheroes.storage.yandexcloud.net/dca8e4af17a13ed9b7d1ce8a8e0fde9a_origin.jpg" alt="hero" />
        </Link>
        <Link>
          <img className="photo-of-hero" src="https://roadheroes.storage.yandexcloud.net/dca8e4af17a13ed9b7d1ce8a8e0fde9a_origin.jpg" alt="hero" />
        </Link>
        <Link>
          <img className="photo-of-hero" src="https://roadheroes.storage.yandexcloud.net/dca8e4af17a13ed9b7d1ce8a8e0fde9a_origin.jpg" alt="hero" />
        </Link>
      </div>
    </div>
  )
}

export default RelativesPage
