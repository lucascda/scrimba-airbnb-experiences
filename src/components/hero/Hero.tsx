import "./Hero.css";
import Grid from "../../assets/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero--container">
      <img src={Grid} className="hero--grid" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind host-all without
        leaving home.
      </p>
    </section>
  );
}
