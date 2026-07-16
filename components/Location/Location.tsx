import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./Location.module.css";

export default function Location() {
  return (
    <section id="location" className={styles.section}>
      <div className="container">
        <SectionHeader
          tag="Find Us"
          title={<>Our <em className={styles.gold}>Location</em></>}
        />
        <div className={styles.grid}>
          {/* Info */}
          <div className={`${styles.info} reveal-left`}>
            <div className={styles.contactCard}>
              <div className={styles.icon}>📍</div>
              <div>
                <h4 className={styles.cardTitle}>Address</h4>
                <p className={styles.cardBody}>C-14, Hubtown Seasons C-Wing Comm Taluka,<br />R.C. Ramakrishna Chemburkar Marg,<br />Opp. Jain Temple, Chembur East,<br />Kurla, Mumbai 400071</p>
              </div>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.icon}>📞</div>
              <div>
                <h4 className={styles.cardTitle}>Phone</h4>
                <a href="tel:9029912000" className={styles.cardLink}>+91 9029912000</a>
              </div>
            </div>
            <h4 className={styles.hoursHead}>Business Hours</h4>
            <table className={styles.hours}>
              <tbody>
                {[
                  ["Monday – Thursday", "12:00 PM – 11:00 PM"],
                  ["Friday",            "12:00 PM – 11:30 PM"],
                  ["Saturday",          "11:00 AM – 11:30 PM"],
                  ["Sunday",            "11:00 AM – 11:00 PM"],
                ].map(([day, time]) => (
                  <tr key={day} className={styles.hoursRow}>
                    <td className={styles.hoursDay}>{day}</td>
                    <td className={styles.hoursTime}>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a
              href="https://maps.app.goo.gl/naw9FHpEyHuo2zcTA"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.dirBtn}
            >
              📍 Get Directions
            </a>
          </div>

          {/* Map */}
          <div className={`${styles.map} reveal-right`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4634780543583!2d72.89791!3d19.059731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62d0000001%3A0x5a54b24e8ef07c5d!2sHubtown%20Seasons%2C%20Chembur%20East!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sozo Izakaya Location"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
