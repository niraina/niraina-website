import React from "react";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className="relative min-h-[300px]">
      <div className="absolute w-full top-10 z-50">
        <div className="max-w-6xl w-full mx-auto px-3">
            <h2 className="text-xl text-center mt-4">Bonjour, je suis <b className="text-2xl">Niraina Andriamiarintsoa</b></h2>
            <h1 className="text-center text-4xl mt-10">Développeur <b>Frontend</b> et <b>Intégrateur web</b></h1>
        </div>
      </div>
      <div className={styles["area"]}>
        <ul className={styles["circles"]}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
