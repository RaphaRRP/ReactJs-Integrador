import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span>Pesquisar</span>
          <span>Carreiras</span>
          <span>Clientes</span>
          <span>Nosso trabalho</span>
        </div>
        <div className="footer-section-columns">
          <span>(19)99167-6124</span>
          <span>pedro@gmail.com</span>
          <span>luis@gmail.com</span>
          <span>joao@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Termos e condições</span>
          <span>Política de privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
