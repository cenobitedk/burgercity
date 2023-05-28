import { Outlet } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo";
import Search from "./components/Search";

function App() {
  return (
    <>
      <header>
        <Logo />
        {/* <Search /> */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
