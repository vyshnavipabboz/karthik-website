"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a dedicated{" "}
        <span className="font-medium">Machine learning Engineer</span>
        with over two years of industrial experience, I am passionate about
        leveraging cutting-edge technologies to develop innovative solutions
        that address real-world challenges. Throughtout my career, I have had
        the privilege to work on a diverse range of products and acadamic
        projects across various industries, honing my skills in{" "}
        <span className="font-medium">
          Data Science, Machine Learning, Deep learning, Reinforcement Learning,
          Generative AI, and Data analysis.{" "}
        </span>
        This portfolio not just showcases my experience and projects but also my
        passion, intent for extracting insights, patterns from data to build
        reliable products and thus contribute to the Data Science community.
      </p>

      <p>
        <span className="italic">When I'm not working</span>, I enjoy playing
        Badminton, watching movies.
      </p>
    </motion.section>
  );
}
