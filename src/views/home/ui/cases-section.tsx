import { Card, SectionContainer, SectionHeading } from "@/shared/ui";
import { projects } from "../model/home-data";
import styles from "./cases-section.module.scss";

export function CasesSection() {
  return (
    <section id="cases">
      <SectionContainer className={styles.container}>
        <SectionHeading
          className={styles.heading}
          eyebrow="Cases"
          title="Опыт работы и проекты"
        />
        <div className={styles.grid}>
          {projects.map((project) => (
            <Card
              key={project.title}
              className={styles.card}
            >
              <div>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.role}>{project.role}</p>
                  </div>
                  <span className={styles.period}>
                    {project.period}
                  </span>
                </div>
                <p className={styles.description}>
                  {project.description}
                </p>
              </div>
              <div className={styles.footer}>
                <p className={styles.stack}>{project.stack}</p>
                {project.href ? (
                  <a
                    href={project.href}
                    className={styles.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Открыть проект
                  </a>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
