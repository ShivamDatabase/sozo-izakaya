import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  tag: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  theme?: "light" | "dark";
  align?: "center" | "left";
}

export default function SectionHeader({
  tag,
  title,
  description,
  theme = "light",
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={`${styles.header} ${align === "left" ? styles.left : ""} reveal`}>
      <p className={styles.tag}>{tag}</p>
      <h2 className={`${styles.title} ${theme === "dark" ? styles.dark : styles.light}`}>
        {title}
      </h2>
      <div className={styles.divider} />
      {description && (
        <p className={`${styles.desc} ${theme === "dark" ? styles.descDark : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
