"use client";

import styles from "./roles-section.module.scss";
import { FaLayerGroup, FaLaptopCode, FaServer, FaBrain } from "react-icons/fa";

const roles = [
  {
    title: "Full Stack Developer",
    description:
      "Building complete web applications using MERN stack with scalable frontend and  backend architectures.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Frontend Developer",
    description:
      "Creating responsive, interactive, and user-friendly interfaces using React, Next.js, and modern CSS.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Backend Developer",
    description:
      "Designing secure APIs,database schemas, and server-side logic using Node.js and Express.",
    icon: <FaServer />,
  },
  {
    title: "Problem Solver",
    description:
      "Strong problem-solving skills with a solid foundation in Data Structures & Algorithms.",
    icon: <FaBrain />,
  },
];

export default function RolesSection() {
  return (
    <section className={styles.rolesSection}>
      <h2 className={styles.sectionTitle}>WHAT I DO</h2>

      <div className={styles.rolesGrid}>
        {roles.map((role, index) => (
          <div className={styles.roleCard} key={index}>
            <div className={styles.icon}>{role.icon}</div>
            <h3>{role.title}</h3>
            <p>{role.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
