import React from "react";
import "./MiniCard.css";
export const MiniCard = ({ img, portrayed, birthday, name,status,nickname }) => {
  return (
    <div className="mini-container">
      <div className="wrapper">
        <img src={img} alt="chracter photo" />
        <h1>{name}</h1>
        <span>{portrayed}</span>
        <span>{birthday}</span>
        {nickname && status ? (
          <>
            <span>{nickname}</span>
            <span>{status}</span>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
