import logo from "../assets/beardSkull.svg";
import Particles from "react-tsparticles";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="App-header">
      <Particles
        id="tsparticles"
        style={{
          position: "absolute",
          height: "100%",
          left: 0,
          top: 0,
          width: "100%",
        }}
        options={{
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: "bottom",
              enable: true,
              random: false,
              speed: 4,
              straight: false,
              out_mode: "out",
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 123,
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#ffffff",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            size: {
              random: true,
              value: 3,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            lineLinked: {
              enable: false,
              distance: 500,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
          },
          detectRetina: true,
        }}
      />
      <img src={logo} className="App-logo" alt="logo" />
      <h1 style={{ color: "white" }}>
        Hello, I'm <strong style={{ color: "#c4c25f" }}>Shelby Huffman</strong>
        <br />
        I'm a Full Stack Web Developer
      </h1>
      <div className="App-nav">
        <button className="App-button">
          <p>
            Watch my Cavaliers
            <br />
            Performance
          </p>
        </button>

        <button className="App-button even">
          <HashLink to="/#navbar" smooth>
            <p>
              <text>Explore my work </text>
              <br />
            </p>
            <p style={{ margin: -5 }}>
              <text style={{ fontSize: "larger" }}>﹀</text>
            </p>
          </HashLink>
        </button>
        <button className="App-button">
          <p>
            Schedule Lessons
            <br />
            Music <text style={{ fontSize: "larger" }}>•</text> Code
          </p>
        </button>
      </div>
    </div>
  );
}
