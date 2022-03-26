import { render, screen } from "@testing-library/react";
import { item } from "../../utils/dummy";
import { MiniCard } from "./MiniCard";

describe("testing minicard", () => {
  it("should render minicard componenet ", () => {
   const num  =  jest.fn(()=>4)
   const container =  render(
      <MiniCard
        item={{
          name: "Carlos",
          img: "Imagen",
          portrayed: "Probando",
          birthday: 50,
        }}
      />
    );
    const nombre = screen.getByText(/Carlos/i);
    const cumple = screen.getByText(/50/i);
 
    expect(nombre).toBeInTheDocument();
    expect(cumple).toBeTruthy();
    // expect(cumple).toBe('2').toBeFalsy();
    expect(container).toMatchSnapshot()
  });
});
