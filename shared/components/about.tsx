import Image from "next/image";
import Title from "./title";
import { imagePath } from "../utils/img-path";

export default function About() {
  return (
    <div className="max-w-6xl w-full mx-auto px-3 py-6">
      <Title title="Laissez-moi me présenter." />
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-[25%] px-3">
          <Image
            src={imagePath.niraina}
            width={200}
            height={200}
            alt="niraina"
            className="rounded-[50%]"
          />
        </div>
        <div className="w-full md:w-[75%] px-3">
          <p>
            En tant que professionnel du développement web, j'ai débuté ma
            carrière en 2021 en tant qu'intégrateur web, maîtrisant des
            technologies comme HTML, CSS, jQuery et WordPress. En 2023, j'ai
            évolué vers un rôle de développeur frontend, en me spécialisant dans
            la bibliothèque React.js et le langage TypeScript. Depuis, je
            m'épanouis en combinant mes compétences d'intégrateur et de
            développeur frontend pour concevoir des expériences web innovantes,
            performantes et esthétiques.
          </p>
        </div>
      </div>
    </div>
  );
}
