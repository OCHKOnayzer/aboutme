import { SectionContainer, SectionHeading } from "@/shared/ui";
import { ContactCard } from "@/widgets/contact-card";
import styles from "./contact-section.module.scss";

export function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <SectionContainer className={styles.container}>
        <div>
          <SectionHeading
            className={styles.heading}
            eyebrow="Contact"
            title="Форма обратной связи"
            description="Оставьте заявку — сообщение придёт мне на почту, а на ваш email отправится копия. Кнопка «AI-вопрос» поможет быстро сформулировать обращение по данным формы."
          />
          <div className={styles.links}>
            <a className={styles.link} href="mailto:popsof@yandex.ru">
              popsof@yandex.ru
            </a>
            <a
              href="https://github.com/OCHKOnayzer"
              className={styles.link}
              rel="noreferrer"
              target="_blank"
            >
              GitHub: github.com/OCHKOnayzer
            </a>
          </div>
        </div>
        <ContactCard />
      </SectionContainer>
    </section>
  );
}
