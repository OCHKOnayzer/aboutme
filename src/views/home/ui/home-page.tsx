import { AboutSection } from "./about-section";
import { CasesSection } from "./cases-section";
import { ContactSection } from "./contact-section";
import { HeroSection } from "./hero-section";
import { SiteHeader } from "./site-header";
import { WorkflowSection } from "./workflow-section";
import styles from "./home-page.module.scss";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className={styles.main}>
        <HeroSection />
        <AboutSection />
        <WorkflowSection />
        <CasesSection />
        <ContactSection />
      </main>
    </>
  );
}
