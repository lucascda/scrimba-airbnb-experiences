import "./App.css";
import Card from "./components/card/Card";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import experiencesData from "./data";
function App() {
  const cards = experiencesData.map((card) => {
    return <Card key={card.id} cardData={card} />;
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
