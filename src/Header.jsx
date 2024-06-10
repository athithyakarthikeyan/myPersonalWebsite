import React from "react";
import "./index.css";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="header">
      <nav className="nav-bar">
        <h1 className="main-title">Athithya Karthikeyan</h1>
        <motion.div
          className="profile-button"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Front-end Developer</h1>
        </motion.div>
      </nav>

    </div>
  );
}