import SectionHeader from "@/components/ui/SectionHeader";
import { events } from "@/lib/data";
import styles from "./Events.module.css";

export default function Events() {
  return (
    <section id="events" className={styles.section}>
      <div className="container">
        <SectionHeader
          tag="Upcoming"
          title={<>Events &amp; <em className={styles.gold}>Experiences</em></>}
          description="Join us for special culinary events, private dining, and unforgettable evenings."
        />
        <div className={styles.grid}>
          {events.map((ev, i) => (
            <div key={ev.id} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={styles.date}>
                <div className={styles.day}>{ev.day}</div>
                <div className={styles.month}>{ev.month}</div>
              </div>
              <div className={styles.info}>
                <h4 className={styles.title}>{ev.title}</h4>
                <p className={styles.desc}>{ev.description}</p>
                <div className={styles.time}>{ev.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
