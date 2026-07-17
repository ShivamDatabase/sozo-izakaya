import Image from "next/image";
import { chefPicks } from "@/lib/data";
import styles from "./ChefsPicks.module.css";

export default function ChefsPicks() {
  return (
    <section id="chefs-picks" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {/* Text */}
          <div className={`${styles.textCol} reveal-left`}>
            <p className={styles.tag}>From the Kitchen</p>
            <h2 className={styles.title}>
              Chef&rsquo;s <em>Recommendations</em>
            </h2>
            <div className={styles.divider} />
            <blockquote className={styles.quote}>
              &ldquo;Every plate I create carries the soul of Japan — the patience of
              preparation, the purity of ingredients, and the pride of presentation.&rdquo;
            </blockquote>
            <div className={styles.profile}>
              <div className={styles.avatar}>
                <Image
                  src="/images/chef.jpg"
                  alt="Chef Hiroshi Nakamura"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="64px"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className={styles.chefName}>Chef Hiroshi Nakamura</h4>
                <span className={styles.chefRole}>Executive Head Chef · 18 Years Experience</span>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className={`${styles.cards} reveal-right`}>
            {chefPicks.map((pick) => (
              <div key={pick.id} className={styles.card}>
                <div className={styles.pickImg}>
                  <Image
                    src={pick.image}
                    alt={pick.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="80px"
                    loading="lazy"
                  />
                </div>
                <div className={styles.pickInfo}>
                  <h4>{pick.name}</h4>
                  <p>{pick.description}</p>
                  <span className={styles.price}>{pick.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
