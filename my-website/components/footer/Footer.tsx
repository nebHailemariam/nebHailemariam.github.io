import styles from "./Footer.module.scss";

type Social = { label: string; href: string; text: string };

const socials: Social[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nebhailemariam",
    text: "nebhailemariam",
  },
  {
    label: "GitHub",
    href: "https://github.com/nebHailemariam",
    text: "@nebHailemariam",
  },
  {
    label: "Hugging\u00A0Face",
    href: "https://huggingface.co/nebhailema",
    text: "nebhailema",
  },
  {
    label: "Email",
    href: "mailto:nebhailema@gmail.com",
    text: "nebhailema@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {socials.map((link) => (
        <div key={link.label} className={styles.row}>
          <span className={styles.label}>{link.label}</span>
          <hr className={styles.divider} />
          <a href={link.href} className="link">
            {link.text}
          </a>
        </div>
      ))}
    </footer>
  );
}
