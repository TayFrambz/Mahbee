import React from 'react'
import { Link } from 'react-router-dom';
import BackImage from "../assets/cartao-info.jpg"
import Contato from "../assets/Whatsapp-logo-vector.webp"
import "../styles/Contact.css";

function Contact() {
    return (
      <div className="contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${BackImage})` }}
        ></div>
        <div className="rightSide">
          <h1> Entre em contato </h1>

          <div className='link'>
            <Link to="https://wa.me/5511913753773" target="_blank">
              <img src={Contato} />
            </Link> 

          </div>
            

            <p>Ao clicar no ícone acima
               você será redirecionado
               para nosso WhatsApp&copy;</p>
          
        </div>
      </div>
    );
  }
  
export default Contact
