import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NairobiMap from "./components/NairobiMap";
import ExploreCategories from "./components/ExploreCategories";
import PopularGuides from "./components/PopularGuides";
import Tools from "./components/Tools";
import Neighborhoods from "./components/Neighborhoods"
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Housing from "./pages/Housing";
import Money from "./pages/Money";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
          path="/"
          element={
            <> 
            <Hero />
            <ExploreCategories />
            <PopularGuides />
            <Tools />
            <Neighborhoods />
            <NairobiMap />
            </>
          }
        />
        <Route path="/housing" element={<Housing />} />
        <Route path="/money" element={<Money />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;