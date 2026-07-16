import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { blogPosts } from "@/lib/data";
import styles from "./Blog.module.css";

export default function Blog() {
  return (
    <section id="blog" className={styles.section}>
      <div className="container">
        <SectionHeader
          tag="Our Journal"
          title={<>Stories from <em className={styles.gold}>Sozo</em></>}
        />
        <div className={`${styles.grid} reveal`}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} sizes="(max-width:900px) 90vw, 33vw" loading="lazy" className={styles.img} />
              </div>
              <div className={styles.info}>
                <div className={styles.tag}>{post.tag}</div>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.meta}>
                  <span>📅 {post.date}</span>
                  <span>⏱ {post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
