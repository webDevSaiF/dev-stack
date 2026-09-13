import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";

export default function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Technologies></Technologies>
      </main>
      <Footer></Footer>
    </>
  );
}
