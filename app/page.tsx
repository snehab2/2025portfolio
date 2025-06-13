import Image from "next/image";
import Landing from "./sections/Landing";
import Navbar from "./sections/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Landing/>
    </div>
  );
}
