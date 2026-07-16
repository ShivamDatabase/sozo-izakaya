import Link from "next/link";
import styles from "./ReserveCTA.module.css";

export default function ReserveCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.bgOverlay} />
      <div className="container relative z-10 text-center reveal-scale">
        <h2 className={styles.title}>Ready to Experience <em className={styles.gold}>Sozo?</em></h2>
        <p className={styles.subtitle}>
          Join us at any of our Mumbai locations for an authentic Japanese dining experience.
        </p>
        <Link href="/locations" className={styles.btn}>
          Reserve Your Table
        </Link>
      </div>
    </section>
  );
}
