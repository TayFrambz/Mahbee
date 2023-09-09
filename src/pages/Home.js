import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/title-001.png'
import BackImage from '../assets/back-001.png'

import HomeStyle from '../styles/HomeStyle.css'


function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BackImage})`}}>

      <div className='headerContainer' style={{backgroundImage: `url(${BannerImage})`}}>

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Qwitcher+Grypen:wght@700&family=Roboto&display=swap');
      </style>

          <h1>Mah'bee Doces</h1>
          <p>Adoçando sua vida.</p>

        <Link to="/menu">
          <button>Peça agora!</button>
        </Link>

      </div>
    </div>
  )
}

export default Home
