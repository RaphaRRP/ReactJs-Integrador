import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Alimentação",
      text: "Veja os supermercados mais baratos da região e ganhe até 20% de cashback em unidades parceiras!",
    },
    {
      image: ChooseMeals,
      title: "Organização",
      text: "Com a ajuda de profissionais, veja como organizar suas finanças inteiramente online.",
    },
    {
      image: DeliveryMeals,
      title: "Compas online",
      text: "Faça compras online a qualquer momento de onde quiser!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Serviços</p>
        <h1 className="primary-heading">Nossos Serviços</h1>
        <p className="primary-text">
          Yenom possui uma plataforma segura e com diversos serviços para nossos clientes, com um apoio de profissionas 24 Horas
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
