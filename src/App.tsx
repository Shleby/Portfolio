import "./App.css";
import Header from "./pages/Header";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App" id="top">
      <div className="App-background">
        <Header />
      </div>
      <Portfolio />
    </div>
  );
}

export default App;
