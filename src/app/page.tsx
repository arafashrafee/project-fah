import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CareerHighlights from "@/components/CareerHighlights";
import ImageStrip from "@/components/ImageStrip";
import Highlights from "@/components/Highlights";
import Story from "@/components/Story";
import LatestStories from "@/components/LatestStories";
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
      <CareerHighlights />
      <ImageStrip />
      <Highlights />
      <Story />
      <LatestStories />
      <News />
      <Social />
      <Sponsors />
      <Contact />
      <Footer />
    </main>
  );
}
