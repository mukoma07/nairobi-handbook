import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExploreCategories from "./components/ExploreCategories";
import PopularGuides from "./components/PopularGuides";
import Tools from "./components/Tools";
import Neighborhoods from "./components/Neighborhoods"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExploreCategories />
      <PopularGuides />
      <Tools />
      <Neighborhoods />
    </>
  );
}


export default App;