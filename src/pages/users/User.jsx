import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Input } from "../../components/Input/Input";
import { MiniCard } from "../../components/MiniCard/MiniCard";
import "../../App.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { userContext } from "../../context/userContext";

export const User = () => {
  const {isLogin} = useContext(userContext)
  // console.log(isLogin);
  const [character, setCharacter] = useState([]);
  const [filtro, setfiltro] = useState("");

  const datosFiltrados = character.filter((item) =>
    item.name.toLowerCase().includes(filtro)
  );
  useEffect(() => {
    const fetchHarry = async () => {
      const response = await fetch(
        "https://www.breakingbadapi.com/api/characters/"
      );
      const data = await response.json();
      setCharacter(data);
    };
    fetchHarry();
  }, []);

  const handleFilter = (e) => {
    setfiltro(e.target.value);
  };
  return (
    <>
      <Navbar />
      <span>Usuario Logeado:{JSON.stringify(isLogin)}</span>
      <div className="App">
        <Input
          onChange={handleFilter}
          placeholder="Buscar..."
          className="input-search"
        />
        <div className="grid-container" data-testid="container-gird">
          {datosFiltrados?.map((item, i) => (
            <Link
              key={item.char_id}
              to={`/users/${item.char_id}`}
              style={{ textDecoration: "none" }}
              state={item}
            >
              <MiniCard  birthday={item.birthday} img={item.img} name={item.name} portrayed={item.portrayed} />
            </Link>
          ))}
        </div>

        <div className="container"></div>
      </div>
    </>
  );
};
