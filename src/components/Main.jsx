import React from "react";
import img from "../images/project.png";
import img2 from "../images/skill-img.png";

const Main = () => {
  return (
    <section id="about"> 
          <div>
      <div class="section-container">
        <div class="hero">
          <h2>Обо мне</h2>
          <p>
            Опытный Frontend-разработчик с глубоким пониманием технологий
            веб-разработки. Обладаю широкими знаниями в HTML, CSS и JavaScript,
            а также опытом работы с современными фреймворками, такими как React
            и Angular. Разрабатываю интуитивно понятные и эффективные
            пользовательские интерфейсы, с уклоном на визуальную
            привлекательность и отзывчивость. Занимаюсь оптимизацией
            производительности веб-приложений. Готов работать в динамичной
            среде, обучаться новым технологиям и внедрять их в проекты.
            Коммуникабельный, командный игрок с прекрасными аналитическими и
            проблемными навыками.
          </p>
        </div>
      </div>
      <div class="section-content">
        <div class="section-content-title">
          <div class="section-content-title-item">
            <div class="section-content-title-item-icon">
              <img src={img} alt="" />
            </div>
            <div class="section-content-title-item-info">
              <h3>40+</h3>
              <p>проектов</p>
            </div>
          </div>
          <div class="section-content-title-item">
            <div class="section-content-title-item-icon">
              <img src={img} alt="" />
            </div>
            <div class="section-content-title-item-info">
              <h3>40+</h3>
              <p>проектов</p>
            </div>
          </div>
          <div class="section-content-title-item">
            <div class="section-content-title-item-icon">
              <img src={img} alt="" />
            </div>
            <div class="section-content-title-item-info">
              <h3>40+</h3>
              <p>проектов</p>
            </div>
          </div>
          <div class="section-content-title-item">
            <div class="section-content-title-item-icon">
              <img src={img} alt="" />
            </div>
            <div class="section-content-title-item-info">
              <h3>40+</h3>
              <p>проектов</p>
            </div>
          </div>
          <div class="section-content-title-item">
            <div class="section-content-title-item-icon">
              <img src={img} alt="" />
            </div>
            <div class="section-content-title-item-info">
              <h3>40+</h3>
              <p>проектов</p>
            </div>
          </div>
        </div>
      </div>
      <div class="section-content-title-item">
        <div class="section-content-title-item-icon">
          <img src={img} alt="" />
        </div>
        <div class="section-content-title-item-info">
          <h3>40+</h3>
          <p>проектов</p>
        </div>
      </div>
      <div class="section-skills">
        <div class="section-skills-title">
          <div class="skills-item">
            <h2>Мои навыки</h2>
          </div>
          <div class="skills-item">
            <p>Frontend developer</p>
            <hr />
          </div>
          <div class="skills-item">
            <p>English level</p>
            <hr />
          </div>
          <div class="skills-item">
            <p>Design developer</p>
            <hr />
          </div>
        </div>
        <div class="section-skills-title">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Main;
