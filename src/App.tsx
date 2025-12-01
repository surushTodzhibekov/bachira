import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Categories from "./components/Categories";
import Features from "./components/Features";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Brands />
      <Categories />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
