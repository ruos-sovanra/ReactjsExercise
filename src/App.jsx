import "./App.css";

import FooterComponent from "./components/FooterComponent";
import Nav from "./components/Nav";
import MainPage from "./layout/MainPage";

function App() {
  return (
    <>
      <span className="h-screen flex flex-col justify-between">
        <Nav />
        <MainPage />
        <FooterComponent />
      </span>
    </>
  );
}

export default App;
