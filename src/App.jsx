import Arena from "./components/Arena";
import Characters from "./components/Characters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <Characters />
      <Arena />
      <Footer/> {/* 👈 Add this to render your footer */}
    </div>
  );
};

export default App;