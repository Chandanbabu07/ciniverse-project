import { useSelector } from "react-redux";
import "./App.css";
import { CategoryPopup } from "./Components/CategoryPopup";
import { HeaderMenu } from "./Components/HeaderMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MoviesCards } from "./Components/MoviesCards";
import { MovieFooter } from "./Components/MovieFooter";

function App() {
  const { categoryHover } = useSelector((state) => state.appScene);

  console.log("categoryHover", categoryHover);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Movie-Review" element={<HeaderMenu></HeaderMenu>} />
        </Routes>
      </Router>
      {categoryHover && <CategoryPopup></CategoryPopup>}
      <MoviesCards></MoviesCards>
      <MovieFooter></MovieFooter>
    </div>
  );
}

export default App;
