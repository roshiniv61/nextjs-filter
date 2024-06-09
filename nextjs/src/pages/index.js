import Image from "next/image";
import Filter from "../components/Filter";
import data from "../data/items.js";
import { useContext } from "react";
import { useState,createContext } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

export default function Home() {
  const [theme, setTheme] = useState("dark");

  const themeToogle = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, themeToogle }}>
        <div className="App" id={theme}>
          <div >
            <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={themeToogle} checked={theme === "dark"}  />
          </div>
          <Filter data={data} />
        </div>
      </ThemeContext.Provider>
    </>
  );
}
