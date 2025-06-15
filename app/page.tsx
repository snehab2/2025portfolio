import Image from "next/image";
import Landing from "./sections/Landing";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <div className="absolute">
      <Navbar/>
      <Landing/>
      <Projects/>
    </div>
  );
}
