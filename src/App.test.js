import { render, screen } from "@testing-library/react";
import App from "./App";
import Content from "./components/Content";
test("Let`s test something", ()=>{
  render(<Content/>);
  screen.debug()

})