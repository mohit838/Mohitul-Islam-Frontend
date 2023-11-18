import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Contacts from "./components/contact/Contacts";
import Experiences from "./components/experiences/Experiences";
import Gallary from "./components/gallary/Gallary";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Experiences />
      <Gallary />
      <Contacts />
      <Footer />
    </main>
  );
}
