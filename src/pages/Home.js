import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import Lion from "../components/home/Lion";
import King from "../components/home/King";
import Token from "../components/home/Token";
import Gaming from "../components/home/Gaming";
import Market from "../components/home/Market";
import Road from "../components/home/Road";

function Home() {
  return (
    <div className="Home">
      <Header></Header>
      <Hero/>
      <Lion/>
      <King/>
      <Token/>
      <Gaming/>
      <Market/>
      <Road/>

      <Footer></Footer>
    </div>
  );
}

export default Home;
