import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Navbar from "./components/navbar";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <main>
      <Navbar />
    </main>
  );
}
