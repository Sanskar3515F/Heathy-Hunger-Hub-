import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import HealthyHungrySplit from "@/components/HealthyHungrySplit";
import About from "@/components/About";
import Owner from "@/components/Owner";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <HealthyHungrySplit />
        <About />
        <Owner />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
