import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from"react-router-dom";
import Home from "./pages/Home.jsx";
// import Info from '.Info.jsx'
// import Browse from './Browse.jsx'
import Selection from "./pages/MovieSelection.jsx";
import NotFound from "./pages/404.jsx";
// import MovieBox from "./components/MovieBox.jsx";
import CarouselPage from "./pages/CarouselPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/info' element={<Info />} />
        <Route path='/browse' element={<Browse />} /> */}
        <Route path="/selection" element={<Selection />} />
        <Route path="/Carousel"element={<CarouselPage/>}/>

        {/* Express Router. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);