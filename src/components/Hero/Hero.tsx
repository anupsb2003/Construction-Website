
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar/Navbar";
import "./Hero.css";
import interiorHero from "../../assets/Open-optimized.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;

    if (!hero || !video) return;

    let ctx: gsap.Context | undefined;
    let initialized = false;

    const initialize = () => {
      if (
        initialized ||
        !Number.isFinite(video.duration) ||
        video.duration <= 0 ||
        video.readyState < 2
      ) {
        return;
      }

      initialized = true;
      video.pause();
      video.currentTime = 0;

      ctx = gsap.context(() => {
        gsap.set(".hero-copy", {
          autoAlpha: 0,
          y: 30,
        });

        gsap.set(".hero-scene-one", {
          autoAlpha: 1,
          y: 0,
        });

        gsap.from(".site-navbar", {
          y: -20,
          autoAlpha: 0,
          duration: 1,
          ease: "power2.out",
        });

        gsap.from(".hero-footer", {
          y: 15,
          autoAlpha: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: () => `+=${window.innerHeight * 4}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline.to(
          video,
          {
            currentTime: video.duration,
            duration: 10,
            ease: "none",
          },
          0
        );

        const transitions = [
          {
            from: ".hero-scene-one",
            to: ".hero-scene-two",
            at: 2,
          },
          {
            from: ".hero-scene-two",
            to: ".hero-scene-three",
            at: 4.5,
          },
          {
            from: ".hero-scene-three",
            to: ".hero-scene-four",
            at: 7,
          },
        ];

        transitions.forEach(({ from, to, at }) => {
          timeline
            .to(
              from,
              {
                autoAlpha: 0,
                y: -25,
                duration: 0.6,
              },
              at
            )
            .fromTo(
              to,
              {
                autoAlpha: 0,
                y: 25,
              },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
              },
              at
            );
        });

        ScrollTrigger.refresh();
      }, hero);
    };

    const handleReady = () => initialize();

    video.addEventListener("loadeddata", handleReady);

    if (video.readyState >= 2) {
      initialize();
    }

    return () => {
      video.removeEventListener("loadeddata", handleReady);
      ctx?.revert();
      video.pause();
    };
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <video
        ref={videoRef}
        className="hero-video"
        muted
        playsInline
        preload="auto"
        poster="/interior-poster.jpg"
      >
        <source src={interiorHero} type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <Navbar />

      <div className="hero-content">
        <div className="hero-copy hero-scene-one">
          <p className="hero-eyebrow">01 / THE ART OF LIVING</p>
          <h1>Living<br />Space.</h1>
          <p className="hero-description">
            Spaces that bring architecture, light and life together.
          </p>
        </div>

        <div className="hero-copy hero-scene-two">
          <p className="hero-eyebrow">02 / NATURAL LIGHT</p>
          <h1>Light<br />&amp; Shadow.</h1>
          <p className="hero-description">
            Every ray of light tells a different story.
          </p>
        </div>

        <div className="hero-copy hero-scene-three">
          <p className="hero-eyebrow">03 / MATERIALS</p>
          <h1>Honest<br />Materials.</h1>
          <p className="hero-description">
            Natural textures. Timeless forms. Thoughtful details.
          </p>
        </div>

        <div className="hero-copy hero-scene-four">
          <p className="hero-eyebrow">04 / YOUR SANCTUARY</p>
          <h1>Feel<br />at Home.</h1>
          <p className="hero-description">
            Designed around the way you live.
          </p>
        </div>
      </div>

      <div className="hero-footer">
        <p>Architecture / Interior Design</p>
        <a href="#projects">Explore Projects ↗</a>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}
