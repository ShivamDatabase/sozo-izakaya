import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Images */}
          <div className={`${styles.images} reveal-left`}>
            <div className={styles.imgMain}>
              <Image
                src="/images/dining_ambience.jpg"
                alt="Sozo Izakaya dining ambience"
                fill
                sizes="(max-width:900px) 90vw, 45vw"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <div className={styles.imgAccent}>
              <Image
                src="/images/sushi_platter.jpg"
                alt="Premium sushi platter"
                fill
                sizes="(max-width:900px) 60vw, 30vw"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <div className={styles.floatBadge}>
              <span className={styles.badgeNum}>5.0</span>
              <span className={styles.badgeTxt}>★ Google</span>
            </div>
          </div>

          {/* Text */}
          <div className={`${styles.text} reveal-right`}>
            <p className={styles.tag}>Our Story</p>
            <h2 className={styles.title}>
              Where Tradition Meets{" "}
              <em className={styles.gold}>Modern Artistry</em>
            </h2>
            <div className={styles.divider} />
            <p className={styles.body}>
              Sozo Izakaya is a celebration of authentic Japanese flavors, where
              every dish is a masterpiece crafted with passion, precision, and
              the finest ingredients. Our chefs bring decades of culinary mastery
              from Japan to the vibrant streets of Mumbai.
            </p>
            <p className={styles.body} style={{ marginTop: "1rem" }}>
              From delicate sashimi to soul-warming ramen, we honor the spirit
              of Izakaya — a place where food, drinks, and warm hospitality
              create unforgettable memories.
            </p>
            <div className={styles.features}>
              {[
                { icon: "🍣", title: "Authentic Recipes", desc: "Traditional Japanese techniques passed through generations" },
                { icon: "🌿", title: "Fresh Ingredients",  desc: "Premium imported ingredients sourced daily" },
                { icon: "👨‍🍳", title: "Skilled Chefs",    desc: "Trained in the finest kitchens of Tokyo & Osaka" },
                { icon: "🏮", title: "Warm Ambience",      desc: "Intimate Izakaya setting with a modern luxury touch" },
              ].map((f) => (
                <div key={f.title} className={styles.feat}>
                  <div className={styles.featIcon}>{f.icon}</div>
                  <div>
                    <h4 className={styles.featTitle}>{f.title}</h4>
                    <p className={styles.featDesc}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#reservation" className={styles.cta}>Reserve Your Table →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
