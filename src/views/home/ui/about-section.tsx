import { Card, SectionContainer, SectionHeading } from "@/shared/ui";
import styles from "./about-section.module.scss";

export function AboutSection() {
  return (
    <section id="about">
      <SectionContainer className={styles.container}>
        <SectionHeading
          className={styles.heading}
          eyebrow="About"
          title="Что умею и где применял опыт"
        />
        <div className={styles.cards}>
          <Card>
            <h3 className={styles.cardTitle}>Frontend</h3>
            <p className={styles.cardText}>
              Разрабатываю клиентские приложения на React, Next.js и
              TypeScript: UI, бизнес-логику, работу с данными, Redux и
              интеграцию REST API.
            </p>
          </Card>
          <Card>
            <h3 className={styles.cardTitle}>Backend</h3>
            <p className={styles.cardText}>
              Участвую в backend-разработке на Node.js и Express, работаю с
              PostgreSQL, дорабатываю существующую логику и поддерживаю
              продакшен-функционал.
            </p>
          </Card>
          <Card>
            <h3 className={styles.cardTitle}>Направления</h3>
            <p className={styles.cardText}>
              Fullstack: веб-приложения, аналитические интерфейсы, REST API,
              state management, поддержка legacy и миграции на современный стек
              (MERN).
            </p>
          </Card>
        </div>
      </SectionContainer>
    </section>
  );
}
