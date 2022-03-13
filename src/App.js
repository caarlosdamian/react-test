import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Input } from "./components/Input/Input";
import { MiniCard } from "./components/MiniCard/MiniCard";

function App() {
  const [character, setCharacter] = useState([]);
  const [filtro, setfiltro] = useState("");

  const datosFiltrados = character.filter((item) =>
    item.name.toLowerCase().includes(filtro)
  );
  useEffect(() => {
    const fetchHarry = async () => {
      const response = await fetch("https://www.breakingbadapi.com/api/characters/");
      const data = await response.json();
      setCharacter(data);
    };
    fetchHarry();
  }, []);

  const handleFilter = (e) => {
    setfiltro(e.target.value);
  };
  return (
    <div className="App">
        <Input
          onChange={handleFilter}
          placeholder="Buscar..."
          className="input-search"
        />
        <div className="grid-container">
          {datosFiltrados?.map((item, i) => (
            <MiniCard  item={item}/>
          ))}
        </div>

          <div className="container">

          </div>
        
    </div>
  );
}

export default App;
