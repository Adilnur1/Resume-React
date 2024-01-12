import React from "react";
import img from "../images/Frame (1).png";

const Header = () => {
  return (
    <div>
      <div class="header-container">
        <div class="nav">
          <div class="navbar">
            <div class="navbar-item-logo">Resume</div>
            <div class="navbar-item-menu">
              <div class="navbar-item-menu-list">ГЛАВНАЯ</div>
              <a href="#about" class="navbar-item-menu-list">ОБ АВТОРЕ</a>
              <a href="#footer" class="navbar-item-menu-list">КОНТАКТЫ</a>
            </div>
          </div>
          <div class="burger-menu">
            <div class="burgerr1"></div>
            <div class="burgerr2"></div>
            <div class="burgerr3"></div>
          </div>
        </div>

        <div class="content">
          <div class="content-left">
            <img src={img} alt="" />
          </div>
          <div class="content-right">
            <h1>Дизайн и верстка</h1>
            <p>
              Начинающий программист, стремлюсь к развитию в сфере
              веб-разработки. Осваиваю HTML, CSS, и JavaScript. Изучаю
              современные фреймворки. Готов к обучению и готовлюсь к
              долгосрочной и продуктивной карьере в IT-индустрии.
            </p>
            <button>НАПИСАТЬ МНЕ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
