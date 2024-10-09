import { abouts, skills } from "../data/skill";
import Skill, { SkillProps } from "./skill";
import Title from "./title";

export default function Profile() {
  return (
    <div className="max-w-6xl w-full mx-auto px-3 mt-5">
      <Title title="Profile et compétences"/>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          {abouts.map((item: SkillProps) => (
            <Skill key={item.title} title={item.title} content={item.content} />
          ))}
        </div>
        <div className="w-full md:w-1/2">
          {skills.map((item: SkillProps) => (
            <Skill key={item.title} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
}
