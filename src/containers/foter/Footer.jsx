import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>

      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
        </div>
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src= {logo} alt="logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>links</p>
            <p>overnons</p>
            <p>social media</p>
            <p>counters</p>
            <p>contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>terms and conditions</p>
            <p>privqcy policy</p>
            <p>contact</p>
            
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>Chretcherwood k12 Dk alkarmijks</p>
            <p>085-23435888</p>
            <p>info@gmail.com</p>
            
          </div> 

        </div>
        <div className="gpt3__footer-copyright">
          <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
    </div>

  )
}

export default Footer
