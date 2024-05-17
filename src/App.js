import { useSelector } from "react-redux";
import "./App.css";
import { HeaderMenu } from "./Components/HeaderMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MoviesCards } from "./Components/MoviesCards";
import { MovieFooter } from "./Components/MovieFooter";
import { MobileNavBar } from "./Components/MobileNavBar";

function App() {
  const { categoryHover, showNavSlider } = useSelector(
    (state) => state.appScene
  );

  console.log("categoryHover", categoryHover);
  return (
    <div className="App">
      <HeaderMenu></HeaderMenu>
      {showNavSlider && <MobileNavBar></MobileNavBar>}

      <Router>
        <Routes>
          <Route path="/Movie-Review" element={<MoviesCards></MoviesCards>} />
        </Routes>
      </Router>

      <MovieFooter></MovieFooter>
    </div>
  );
}

export default App;
