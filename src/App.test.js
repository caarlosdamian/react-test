import { act, render, screen } from "@testing-library/react";
import App from "./App";
import { MiniCard } from "./components/MiniCard/MiniCard";

// async function getCharacters(){
//   try {
//     const result = await fetch('https://www.breakingbadapi.com/api/characters/')
//     const response = await result.json()
//     return response[1].name
    
//   } catch (error) {
//     return null
//   }
// }

describe("test for App component ", () => {
  beforeEach(()=>{
    act(()=>{
      render(<App />);
    })
  })
  test("renders learn react link", () => {
 
    const inputPrueba = screen.getByPlaceholderText("Buscar...");
    expect(inputPrueba).toBeInTheDocument();
  });
  it('should render a grid container ',()=>{
    const divcontainer = screen.getByTestId('container-gird')
    expect(divcontainer).toHaveClass('grid-container')
  })
  // it('should recreate api call ',async()=>{
  //   const apiCall = await getCharacters()
  //   expect(apiCall).toBe("Jesse Pinkman")
  // })
});
