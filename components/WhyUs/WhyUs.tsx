import SectionHeader from "@/components/ui/SectionHeader";
import { features } from "@/lib/data";
import styles from "./WhyUs.module.css";

export default function WhyUs() {
  return (
    <section id="why-us" className={styles.section}>
      <div className="container">
        <SectionHeader
          tag="Why Sozo"
          title={<>The Sozo <em className={styles.gold}>Experience</em></>}
          description="Every detail at Sozo Izakaya is curated to deliver an extraordinary dining experience."
        />
        <div className={styles.grid}>
          {features.map((f, i) => (
            <div
              key={f.id}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
            >
              <span className={styles.icon}>{f.icon}</span>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.desc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
