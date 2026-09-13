import cv from "../assets/cv.pdf";
function Hero() {
  return (
    <section className="hero">
      <h1>Hi, I'm Arif 👋</h1>

      <h2>Software Engineer & MERN Stack Developer</h2>

      <p>
        Open to Frontend & React opportunities. I build responsive web and
        mobile applications using React, React Native, and JavaScript.
      </p>

      <a className="cv" href={cv} download="Arif-CV.pdf">
        Download CV
      </a>
    </section>
  );
}

export default Hero;

