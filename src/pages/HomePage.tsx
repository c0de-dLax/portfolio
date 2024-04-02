import { useEffect } from "react";
import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  // Updates the url hash depending on what section is within the viewport
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

  return (
    <main className="bg-white dark:bg-[rgb(2,8,23)]">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
