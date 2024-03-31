import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage  from "./pages/HomePage";
import  ContactPage from "./pages/ContactPage";
import  PageNotFound  from "./pages/ErrorPage";
import PageUnderConstruction from "./pages/PageUnderConstruction";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio/" element={<HomePage />} />
        <Route path="/portfolio/contactform" element={<ContactPage />} />
        <Route path="/portfolio/basiccalculatorapp" element={<PageUnderConstruction />} />
        <Route path="/portfolio/taxcalculatorapp" element={<PageUnderConstruction />} />
        <Route path="/portfolio/todoproductivityapp" element={<PageUnderConstruction />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
