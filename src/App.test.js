const { render, waitFor ,screen} = require("@testing-library/react");
import App from "./App";

describe("Breaking bad app", () => {
  it("Should render characters names", async () => {
    render(<App />);
    await waitFor(()=>{
      screen.getByText("Skyler White")
    })
  });
});
