import React from "react";
import { Avatar } from "./avatar";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className="relative min-h-[300px]">
      <div className="absolute w-full top-10 z-50">
        <div className="max-w-6xl w-full mx-auto px-3">
        <div className="flex items-center gap-2 py-6">
          <Avatar />
          <h2 className="font-semibold text-2xl">Niraina Andriamiarintsoa</h2>
        </div>
        <p className="font-caveat italic text-[20px]">
          Développeur <b>frontend expérimenté</b>, innovant et proactif, capable de
          concevoir des sites web et des applications aux concepts élégants et
          novateurs pour des clients exigeants.
        </p>

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
