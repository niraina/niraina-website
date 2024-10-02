import style from './title.module.css'
type TitleProps = {
  title: string;
}

export default function Title({title}: TitleProps) {
  return (
    <h2 className={`${style['title']} text-4xl font-semibold mb-4`}>{title}</h2>
  )
}
