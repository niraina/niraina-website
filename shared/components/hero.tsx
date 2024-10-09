"use client";
import React from "react";
import styles from "./hero.module.css";
import WritingTextEffect from "./writing-text-effect";
import Link from "next/link";
import { Facebook, Github, Linkedin, Mail, Youtube } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-[300px]">
      <div className="absolute w-full top-10 z-50">
        <div className="max-w-6xl w-full mx-auto px-3">
            <h2 className="text-xl text-center mt-4">Bonjour, je suis <b className="text-2xl">Niraina Andriamiarintsoa</b></h2>
            <h1 className="text-center text-4xl mt-4">Développeur <b>Frontend</b> et <b>Intégrateur web</b></h1>
            <WritingTextEffect text="Votre idée, ma mission."/>
            <div className="flex gap-3 justify-center mt-8">
                <Link href="mailto: andriamiarintsoaniraina@gmail.com" target="_blank" className="text-xl text-gray-600 hover:text-pink-500 duration-300 ease-in-out">
                  <Mail />
                </Link>
                <Link href="www.linkedin.com/in/niraina-andriamiarintsoa-34a267213" target="_blank" className="text-xl text-gray-600 hover:text-pink-500 duration-300 ease-in-out">
                  <Linkedin />
                </Link>
                <Link href="https://github.com/niraina" target="_blank" className="text-xl text-gray-600 hover:text-pink-500 duration-300 ease-in-out">
                  <Github />
                </Link>
                <Link href="https://www.facebook.com/ntsoa.nyraina/" target="_blank" className="text-xl text-gray-600 hover:text-pink-500 duration-300 ease-in-out">
                  <Facebook />
                </Link>
                <Link href="https://www.youtube.com/@niraina" target="_blank" className="text-xl text-gray-600 hover:text-pink-500 duration-300 ease-in-out">
                  <Youtube />
                </Link>
            </div>
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
