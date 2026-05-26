"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "projects", href: "/projects" },
  { label: "reading", href: "/reading" },
  { label: "resume", href: "/resume" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className={styles.navContainer}>
      <h1 className={styles.logo}>
        <Link href="/">Nebiyou Hailemariam</Link>
      </h1>
      <nav className={styles.navigation}>
        {navLinks.map((navLink) => (
          <Link
            key={navLink.href}
            href={navLink.href}
            className={`${styles.navItem} ${
              pathname === navLink.href ? styles.navItemActive : ""
            }`}
          >
            {navLink.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
