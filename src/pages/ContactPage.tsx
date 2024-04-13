import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import ContactPageNav from "../components/ContactPageNav";
import ContactPageFooter from "../components/ContactPageFooter";

const ContactPage = () => {
  return (
    <main className="bg-white dark:bg-[rgb(2,8,23)]">
      <Navbar />
      <ContactForm />
      <ContactPageNav />
      <ContactPageFooter />
    </main>
  );
};

export default ContactPage;
