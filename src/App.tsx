import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import PageUnderConstruction from "./pages/PageUnderConstruction";

const App = () => {
  const initialTheme = localStorage.getItem("themeForPortfolio") || "dark";
  const [theme, setTheme] = useState(initialTheme);

  const selectThemeHandler = (newTheme: string) => {
    if (newTheme === "dark" || newTheme === "light") {
      setTheme(newTheme);
      localStorage.setItem("themeForPortfolio", newTheme);
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage selectThemeHandler={selectThemeHandler} theme={theme} />} />
        <Route path="/contactform" element={<ContactPage selectThemeHandler={selectThemeHandler} theme={theme}/>} />
        <Route
          path="/todoproductivityapp"
          element={<PageUnderConstruction />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
