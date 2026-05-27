import { Card } from "@/shared/ui";
import { stack } from "../model/home-data";
import styles from "./hero-section.module.scss";

export function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            Fullstack developer / 2 года 3 месяца опыта
          </p>
          <h1 className={styles.title}>Антон, fullstack-разработчик.</h1>
          <p className={styles.description}>
            Разрабатываю интерфейсы, бизнес-логику и backend-часть: React,
            TypeScript, Next.js, Node.js, PostgreSQL, REST API и поддержка
            продакшен-проектов.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryLink}>
              Связаться
            </a>
            <a href="#cases" className={styles.secondaryLink}>
              Посмотреть опыт
            </a>
          </div>
        </div>

        <div className={styles.profileColumn}>
          <Card className={styles.profileCard}>
            <div className={styles.profileHeader}>
              <p className={styles.profileEyebrow}>Profile</p>
              <h2 className={styles.profileTitle}>
                Антон, fullstack developer
              </h2>
            </div>
            <dl className={styles.stats}>
              <div>
                <dt className={styles.statLabel}>Фокус</dt>
                <dd className={styles.statValue}>React / Node.js</dd>
              </div>
              <div>
                <dt className={styles.statLabel}>Опыт</dt>
                <dd className={styles.statValue}>2 года 3 месяца</dd>
              </div>
              <div>
                <dt className={styles.statLabel}>AI</dt>
                <dd className={styles.statValue}>Инструмент в работе</dd>
              </div>
            </dl>
            <div className={styles.stack}>
              {stack.map((item) => (
                <span key={item} className={styles.stackItem}>
                  {item}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
