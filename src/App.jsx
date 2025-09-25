import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Navbar from "./components/navbar";
import Hero from "./components/sections/hero";
import Intro from "./components/sections/intro";
import Jason from "./components/sections/jason";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <Jason />
    </main>
  );
}
