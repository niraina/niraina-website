import React from "react";
import styles from "./course.module.css";
type CourseItemProps = {
  title: string;
  period: string;
  children: React.ReactNode;
}

const CourseItem = ({title, period, children}:CourseItemProps) => {
  return (
    <div className={styles["timeline-card"]}>
      <div className={styles["timeline-card-wrap"]}>
        <div className={styles["card-head-wrap"]}>
          <h2 className={styles["timeline-card-head"]}>{title}</h2>
          <h6 className={styles["timeline-card-subhead"]}>{period}</h6>
        </div>
        <p className={styles["timeline-card-text"]}>{children}</p>
      </div>
    </div>
  );
};

export default CourseItem;
