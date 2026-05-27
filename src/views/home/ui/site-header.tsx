import styles from "./site-header.module.scss";

const navLinks = [
  { href: "#about", label: "Обо мне" },
  { href: "#workflow", label: "Подход" },
  { href: "#cases", label: "Опыт" },
  { href: "#contact", label: "Контакты" },
] as const;

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          Антон / Fullstack
        </a>
        <nav aria-label="Основная навигация">
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
