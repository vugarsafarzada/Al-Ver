import { render } from "@testing-library/react";

import App from "./App";
import Filter from "./components/Filter";
import Content from "./components/Content";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Search from "./components/Search";
import Navigator from "./components/Navigator";
import Favorites from "./components/Favorites";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Post from "./components/Post";
import Product from "./components/Product";
import Error from "./components/Error";

test("Error Component", ()=>{
  render(<Error/>);
})

test("Product Component", ()=>{
  render(<Product/>);
}) 

test("Post Component", ()=>{
  render(<Post/>); 
}) 

test("Footer Component", ()=>{
  render(<Footer/>); 
})

test("Favorites Component", ()=>{
  render(<Favorites/>);
})

test("Search Component", ()=>{
  render(<Search/>);
})

test("Filter Component", ()=>{
  render(<Filter/>);
})

test("Main Component", ()=>{
  render(<Main/>);
}) 

test("Navigator Component", ()=>{
  render(<Navigator/>);
})

test("Header Component", ()=>{
  render(<Header/>);
})

test("Categories Component", ()=>{
  render(<Categories/>); 
})

test("Content Component", ()=>{
  render(<Content/>); 
})

test("App Component", ()=>{
  render(<App/>);
})
