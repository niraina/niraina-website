import CourseItem from "./course-item";
import styles from "./course.module.css";
import Title from "./title";

export default function Formation() {
  return (
    <div className="max-w-6xl w-full mx-auto px-3 mt-5">
      <Title title="Formations"/>
      <div className={styles["timeline-main"]}>
        <div className={styles["timeline-wrap"]}>
          <CourseItem title="Certification de formation (Vue.js et Python)" period="">
            SoTalent (2023 à Antananarivo)
          </CourseItem>
          <CourseItem title="Master professionnelle en informatique" period="">
            Ecole Nationale d'Informatique (2021 à Fianarantsoa)
          </CourseItem>
          <CourseItem title="License professionnelle en informatique" period="">
            Ecole Nationale d'Informatique (2019 à Fianarantsoa)
          </CourseItem>
        </div>
      </div>
    </div>
  )
}
