import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Email from "./components/Email";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black ">
      <Navbar />
      <div className="lg:container lg:mx-auto mt-24 py-10 px-10 sm:px-4 md:px-5">
        <HeroSection />
        <AboutMe />
        <Projects />
        <Email />
      </div>
      <Footer />
    </main>
  );
}
