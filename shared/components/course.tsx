import CourseItem from "./course-item";
import styles from "./course.module.css";
import Title from "./title";

export default function Course() {
  return (
    <div className="max-w-6xl w-full mx-auto px-3 mt-5">
      <Title title="Expérience professionnelle"/>
      <div className={styles["timeline-main"]}>
        <div className={styles["timeline-wrap"]}>
          <CourseItem title="Développeur Frontend" period="2023 à ce jour">
            Dynamisation & intégration API Rest sur React et Next.js (ERP, Site
            vitrine, Ecommerce)
            <br />
            <b>Téchnologie:</b> React, Next.js Javascript, Typescript, Antd,
            Tailwind, Flowbite, scss...
          </CourseItem>
          <CourseItem title="Intégrateur WEB" period="2021 à ce jour">
            Intégration HTML sur mesure suivant la maquette + Intégration et
            dynamisation sur Wordpress(Blog, site vitrine, ecommerce ...)
            <br />
            <b>Téchnologie:</b> PHP, Javascript, HTML, CSS, Sass, Bootstrap,
            jQuery ...
            <br />
            <b>Base de données:</b> MySQL
          </CourseItem>
          <CourseItem title="Freelance" period="2022 à ce jour">
            Dynamisation et intégration utilisant du React, Next.js ou du CMS WordPress (Blog, Site vitrine, ecommerce, ERP...)
            <br />
            <b>Téchnologie:</b> PHP, Javascript, Typescript, HTML, CSS, Sass, Tailwind,Bootstrap, jQuery, slick...
            <br />
            <b>Base de données:</b> MySQL, MongoDB
          </CourseItem>
        </div>
      </div>
    </div>
  );
}
