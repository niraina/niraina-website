export type SkillProps = {
  title: string;
  content: string;
}
export default function Skill({title, content}: SkillProps) {
  return (
    <div className="p-3">
      <h2 className="text-xl uppercase font-jetbrains font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  )
}
