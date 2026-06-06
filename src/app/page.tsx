import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ImageStrip from "@/components/ImageStrip";
import Highlights from "@/components/Highlights";
import Story from "@/components/Story";
import News from "@/components/News";
import Social from "@/components/Social";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ImageStrip />
      <Highlights />
      <Story />
      <News />
      <Social />
      <Sponsors />
      <Contact />
      <Footer />
    </main>
  );
}
