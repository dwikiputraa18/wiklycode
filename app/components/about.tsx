"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Projects", value: 50, suffix: "+" },
  { label: "Clients", value: 30, suffix: "+" },
  { label: "Experience", value: 3, suffix: " Years" },
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const yText = useTransform(scrollYProgress, [0, 1], [180, -180]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Observe stats visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Background */}
      <motion.div
        style={{ y: yTitle }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black"
      />

      <div className="max-w-6xl mx-auto text-white">
        {/* Title */}
        <motion.h2
          style={{ y: yTitle, opacity }}
          className="text-4xl md:text-5xl font-bold mb-10"
        >
          About WiklyCode
        </motion.h2>

        {/* Description */}
        <motion.p
          style={{ y: yText, opacity }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
        >
            <span className="text-cyan-400 font-semibold">WiklyCode </span>
        is a web developer focused on crafting immersive and scalable web
        applications using modern technologies with cinematic motion and
        clean architecture.
      
        </motion.p>

        <motion.p
          style={{ y: yText, opacity }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-14"
        >
          Kami membantu bisnis dan individu membangun website serta aplikasi
          yang modern, scalable, dan memberikan pengalaman digital terbaik.
        </motion.p>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {visible ? <Counter end={stat.value} /> : 0}
                {stat.suffix}
              </div>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

/* Counter Component */
const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return <>{count}</>;
};
