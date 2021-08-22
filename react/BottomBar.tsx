import React from 'react'
import './styles.css'

const Navigation = () => {
  return (
    <div className="ContainerBar">
      <nav className="BottomBar">
        <a className="IconBottom" href="/">
          <img
            src="https://img.icons8.com/material-rounded/48/ffffff/user.png"
            alt=""
          />
        </a>
        <a className="IconBottom" href="/">
          <img
            src="https://img.icons8.com/material-rounded/48/ffffff/home.png"
            alt=""
          />
        </a>
        <a className="IconBottom" href="/">
          <img
            src="https://img.icons8.com/ios-glyphs/48/ffffff/favorite-cart.png"
            alt=""
          />
        </a>
        <a
          className="IconBottom"
          href="https://api.whatsapp.com/send?phone=5588996600351&text=Ol%C3%A1%2C%20poderia%20me%20ajudar%3F"
        >
          <img
            src="https://img.icons8.com/material-outlined/48/ffffff/whatsapp--v1.png"
            alt=""
          />
        </a>
      </nav>
    </div>
  )
}

export default Navigation
