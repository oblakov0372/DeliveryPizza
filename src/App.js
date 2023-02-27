import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound";
import { createContext, useState } from "react";

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart items={[]} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
