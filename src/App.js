import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/home/Hero";
import Lion from "./components/home/Lion";
import King from "./components/home/King";
import Token from "./components/home/Token";
import Gaming from "./components/home/Gaming";
import Market from "./components/home/Market";
import './styles/main.css'
import './styles/style.css'
import './styles/reset.css'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero/>
      <Lion/>
      <King/>
      <Token/>
      <Gaming/>
      <Market/>

      <Footer></Footer>
    </div>
  );
}

export default App;
