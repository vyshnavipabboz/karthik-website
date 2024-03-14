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
        Ingenious ML Engineer with a master’s degree in engineering data science
        possessing strong foundation in{" "}
        <span className="font-medium">
          linear algebra, statistics, probability theory{" "}
        </span>
        and over 3 years of experience in building data driven solutions.
        Extensively contributed towards the ML community taking up projects and
        building products in various domains including{" "}
        <span className="font-medium">
          Supervised predictive modeling, Time series Forecasting, Clustering,
          Reinforcement Learning, Deep Learning, CV, NLP, GANs, Generative AI.
          AWS Certified Developer
        </span>
        Associate with strong skills in designing efficient ETL solutions and
        scalable <span className="font-medium">software development</span> and{" "}
        <span className="font-medium">CI/CD</span> on cloud. Professional
        Engineer who can Bridge the gap between complex data and clear action
        with exceptional collaboration skills and adept at interpreting
        intricate datasets and translating them into actionable insights.
      </p>
    </motion.section>
  );
}
