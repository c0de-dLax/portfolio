import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const HomePage = () => {

  useEffect(() => {
    const handleScroll = () => {
      const pageSection = document.querySelectorAll("section[id]");

      pageSection.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
          const oldHash = window.location.hash;
          const newHash = "#" + section.id;
          if (newHash !== oldHash) {
            const location = window.location.toString().split("#")[0];
            if (newHash === "#home") {
              window.history.replaceState(null, "", location);
            } else {
              window.history.replaceState(null, "", location + newHash);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main className="bg-white dark:bg-[rgb(2,8,23)]">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
