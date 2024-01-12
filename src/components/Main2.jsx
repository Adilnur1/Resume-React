import React from "react";
import img from "../images/about_me.png";
import img1 from "../images/sidebar.png";
import img2 from "../images/sidebar2.png";
import img3 from "../images/sidebar3.png";
import img4 from "../images/clients.png";

const Main2 = () => {
  return (
    <div>
      <div class="about_me">
        <div class="about_me-title">
          <h2>Как я работаю</h2>
          <p>
            Я системно анализирую требования, разрабатываю чистый и модульный
            код с учетом эффективности и масштабируемости. Активно использую
            инструменты Git и методологии Agile/Scrum. В поисках оптимальных
            решений общаюсь с командой, обновляюсь по последним тенденциям и
            постоянно совершенствую свои навыки. Фокусируюсь не только на
            функциональности, но и на качестве пользовательского опыта.
          </p>
        </div>
        <div class="about_me-title">
          <img src={img} alt="" />
        </div>
      </div>
      <div class="section-2-sidebar">
        <div class="sidebar_imgg">
          <img id="side" src={img1} alt="" />
          <img id="side" src={img2} alt="" />
          <img id="side" src={img1} alt="" />
        </div>
        <div class="sidebar_img">
          <img id="side" src={img3} alt="" />
          <img id="side" src={img1} alt="" />
          <img id="side" src={img3} alt="" />
        </div>
      </div>
      <div class="section-2-clients">
        <img src={img4} alt="" />
        <img src={img4} alt="" />
        <img src={img4} alt="" />
        <img src={img4} alt="" />
      </div>
    </div>
  );
};

export default Main2;
