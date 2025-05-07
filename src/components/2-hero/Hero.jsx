import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section id="hero" className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./images/mine-logo.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
        Every project is a new story.
        </motion.h1>

        <p className="sub-title">
         I'm [HEVA], a web developer specializing in creating
          modern interactive applications and websites in front-end and back-end
          development. <br /> I'm currently working on mastering technologies like
          [MySQL, Node.js, and Mongo DB].  <br />I love turning creative ideas
          into reality by writing clean and efficient code, and I'm always keen
          to develop my skills to keep up with the latest trends in the
          programming world. <br />I have a great passion for solving technical
          problems and improving user experiences.
        </p>

        <div className="all-icons flex">
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
