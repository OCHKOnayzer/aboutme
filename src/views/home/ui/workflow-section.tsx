import { SectionContainer, SectionHeading } from "@/shared/ui";
import { aiWorkflow, workflow } from "../model/home-data";
import styles from "./workflow-section.module.scss";

export function WorkflowSection() {
  return (
    <section id="workflow" className={styles.section}>
      <SectionContainer className={styles.container}>
        <SectionHeading
          className={styles.heading}
          eyebrow="Workflow"
          title="Подход к задачам и AI"
          description="Сначала уточняю задачу и ограничения, затем делаю рабочий инкремент с обработкой ошибок и проверкой на реальных данных."
        />
        <div className={styles.content}>
          <ol className={styles.steps}>
            {workflow.map((item, index) => (
              <li key={item} className={styles.step}>
                <span className={styles.stepNumber}>
                  {index + 1}
                </span>
                <p className={styles.stepText}>{item}</p>
              </li>
            ))}
          </ol>
          <div className={styles.aiBlock}>
            <h3 className={styles.aiTitle}>
              Как использую AI в работе
            </h3>
            <ul className={styles.aiList}>
              {aiWorkflow.map((item) => (
                <li key={item} className={styles.aiItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
