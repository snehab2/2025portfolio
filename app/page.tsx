import Image from "next/image";
import Landing from "./sections/Landing";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="absolute">
      <Navbar/>
      <Landing/>
      <Projects/>
      <Footer/>
    </div>
  );
}
