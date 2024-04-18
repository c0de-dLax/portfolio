import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import ContactPageNav from "../components/ContactPageNav";
import ContactPageFooter from "../components/ContactPageFooter";

interface ContactPageProps {
  selectThemeHandler: (newTheme: string) => void;
  theme: string;
}
const ContactPage: React.FC<ContactPageProps> = ({ selectThemeHandler, theme }) => {
  return (
    <main className="bg-white dark:bg-[rgb(2,8,23)]">
      <Navbar selectThemeHandler={selectThemeHandler} theme={theme}/>
      <ContactForm />
      <ContactPageNav />
      <ContactPageFooter />
    </main>
  );
};

export default ContactPage;
