import React from "react";
import {
  Home,
  Info,
  Lounge,
  Navbar,
  Search,
  Subscribe,
  Support,
  Travelers,
  Footer,
} from "./Components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      {/* <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribe />
      <Footer /> */}
    </div>
  );
};

export default App;
