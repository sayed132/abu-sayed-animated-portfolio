import Navbar from "./Components/Navbar/Navbar";
import "./app.scss";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section>
        <a href="">parallax</a>
      </section>
      <section id="Services">
        <a href="">Services</a>
      </section>
      <section>
        <a href="">parallax</a>
      </section>
      <section id="Portfolio">
        <a href="">Portfolio1</a>
      </section>
      <section>
        <a href="">Portfolio2</a>
      </section>
      <section>
        <a href="">Portfolio3</a>
      </section>
      <section>
        <a href="">Portfolio4</a>
      </section>
      <section id="Contact">
        <a href="">Contact</a>
      </section>
      <section id="About">
        <a href="">Contact</a>
      </section>
    </div>
  );
};

export default App;
