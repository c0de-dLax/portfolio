import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import PageUnderConstruction from "./pages/PageUnderConstruction";

const App = () => {
  return (
    <Router basename="/portfolio/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactform" element={<ContactPage />} />
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
