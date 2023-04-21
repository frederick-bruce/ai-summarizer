import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";

const App = () => {
  return (
    <Main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Demo />
      </div>
    </Main>
  );
};

export default App;
