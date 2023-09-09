import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAt} from '@fortawesome/free-solid-svg-icons'
import FooterStyle from '../styles/FooterStyle.css'

function Footer() {
  return (
    <div className='footer'>
      {/* <div className='socialMedia'>
      <FontAwesomeIcon icon={faAt}/>
        <h1>mahbeedoces</h1>  
      </div> */}
      <p> &copy; Tayna Trombin 2023</p>
    </div>
  )
}

export default Footer
