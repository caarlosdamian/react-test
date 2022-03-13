import React from "react";
import './MiniCard.css'
export const MiniCard = (item) => {
  return (
    <div className="mini-container">
      <div className="wrapper">
        <img src={item.item.img} alt="chracter photo" />
        <h1>{item.item.name}</h1>
        <span>{item.item.portrayed}</span>
        <span>{item.item.birthday}</span>
      </div>
    </div>
  );
};
