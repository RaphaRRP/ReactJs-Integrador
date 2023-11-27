import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Clientes</p>
        <h1 className="primary-heading">Nossos Clientes</h1>
        <p className="primary-text">
          Com o objetivo de conquisar os clientes, atualmente a Yenom possui uma incrível aceitação de 99% nos usuários que experimentaram nossos serviços.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Plataforma intuitiva, baixei semana passada e estou conseguindo organizar toma a minha renda
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Guisep Camolê</h2>
      </div>
    </div>
  );
};

export default Testimonial;
