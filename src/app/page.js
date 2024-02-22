import Image from "next/image";
import IntroductionSection from "./components/IntroductionSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Email from "./components/Email";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black ">
      <Navbar />
      <div className="container mt-24 mx-auto py-10 px-10 sm:px-4 md:px-5">
        <IntroductionSection />
        <AboutMe />
        <Projects />
        <Email />
      </div>
      <Footer />
    </main>
  );
}
