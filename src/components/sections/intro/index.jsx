import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Intro() {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set(".first-vd-wrapper", { opacity: 0, marginTop: "-150vh" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vd-wrapper",
        start: "center center",
        end: "+=200% top",
        scrub: 2,
        pin: true,
      },
    });

    // fade out hero
    tl.to(".hero-section", { delay: 0.5, opacity: 0, ease: "power1.inOut" });

    // fade in video
    tl.to(".first-vd-wrapper", {
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    });

    // video "fast-forward" through its entire duration in 3 seconds when the video metadata loads
    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<"
      );
    };
  }, []);

  return (
    <section className='first-vd-wrapper'>
      <div className='h-dvh'>
        <video
          playsInline
          muted
          ref={videoRef}
          preload='auto'
          src='/videos/output1.mp4'
          className='first-vd'
        />
      </div>
    </section>
  );
}
