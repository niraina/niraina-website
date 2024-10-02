import Image from "next/image";
import Skill from "./skill";
import { imagePath } from "../utils/img-path";

export default function AllSkill() {
  return (
    <div className="max-w-6xl w-full mx-auto px-3">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 px-3 pb-6">
          <Skill title="LANGAGE DE PROGRAMMATION">
            <p>Javascript, Typescript, PHP</p>
            <div className="flex items-center gap-1">
            <Image
                src={imagePath.javascript}
                width={40}
                height={40}
                alt="js"
              />
              <Image
                src={imagePath.ts_icon}
                width={40}
                height={40}
                alt="ts"
              />
              <Image
                src={imagePath.php}
                width={40}
                height={40}
                alt="php"
              />
              </div>
          </Skill>
        </div>
        <div className="w-full md:w-1/3 px-3 pb-6">
          <Skill title="FRONTEND">
            <p>HTML/CSS, Tailwind, Bootstrap, sass…</p>
          </Skill>
        </div>
        <div className="w-full md:w-1/3 px-3 pb-6">
          <Skill title="FRAMEWORKS & LIBRAIRIES">
            <p>React Js, Next Js, Vue Js, Express Js, jQuery</p>
            <div className="flex items-center gap-1">
              <Image
                src={imagePath.react_icon}
                width={40}
                height={40}
                alt="react"
              />
              <Image
                src={imagePath.next_icon}
                width={40}
                height={40}
                alt="next"
              />
              <Image
                src={imagePath.vue}
                width={40}
                height={40}
                alt="vue"
              />
              <Image
                src={imagePath.node_js}
                width={40}
                height={40}
                alt="node"
              />
              <Image
                src={imagePath.jquery}
                width={40}
                height={40}
                alt="jquery"
              />
            </div>
          </Skill>
        </div>
        <div className="w-full md:w-1/3 px-3 pb-6">
          <Skill title="CMS">
            <p>WordPress</p>
          </Skill>
        </div>
        <div className="w-full md:w-1/3 px-3 pb-6">
          <Skill title="Base de données">
            <p>MySQL, MongoDB</p>
          </Skill>
        </div>
        <div className="w-full md:w-1/3 px-3 pb-6">
          <Skill title="SYSTEME DE GESTION DE VERSION">
            <p>Git</p>
          </Skill>
        </div>
      </div>
    </div>
  );
}
