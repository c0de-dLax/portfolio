import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage  from "./pages/HomePage";
import  ContactPage from "./pages/ContactPage";
import  PageNotFound  from "./pages/ErrorPage";
import PageUnderConstruction from "./pages/PageUnderConstruction";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactform" element={<ContactPage />} />
        <Route path="/basiccalculatorapp" element={<PageUnderConstruction />} />
        <Route path="/taxcalculatorapp" element={<PageUnderConstruction />} />
        <Route path="/todoproductivityapp" element={<PageUnderConstruction />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
