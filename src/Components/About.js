import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
          Aqui na Yenom,
          <p></p>
         seu dinheiro não fica parado
        </h1>
        <p className="primary-text">
          Mais de 50 diferentes investimentos acoplados a plataforma digital para todos os tipos de investidores.
        </p>
        <p className="primary-text">
          Consultoria com profissionais para assinates Premium
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Saiba Mais!</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Nosso Canal
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
