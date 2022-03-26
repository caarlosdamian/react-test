import React from "react";
import { useLocation } from "react-router-dom";
import { MiniCard } from "../../components/MiniCard/MiniCard";
import { Navbar } from "../../components/Navbar/Navbar";

export const SingleUser = () => {
  const location = useLocation();
  console.log(location.state);
  const { birthday, img, name, portrayed, nickname, status } = location.state;
  return (
    <div>
      <Navbar />
      <h1>Single user</h1>
      <MiniCard
        birthday={birthday}
        img={img}
        name={name}
        portrayed={portrayed}
        nickname={nickname}
        status={status}
      />
    </div>
  );
};
