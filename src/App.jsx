import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Navbar from "./components/navbar";
import Hero from "./components/sections/hero";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
