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
  { label: "writing", href: "/writing" },
  { label: "reading", href: "/reading" },
  { label: "resume", href: "/resume" },
];

const pageTitles: Record<string, string> = {
  "/": "Home",
  "/projects": "Projects",
  "/writing": "Writing",
  "/reading": "Reading",
  "/resume": "Resume",
};

function getPageTitle(pathname: string): string | undefined {
  if (pageTitles[pathname]) return pageTitles[pathname];

  for (const [href, title] of Object.entries(pageTitles)) {
    if (pathname.startsWith(`${href}/`)) return title;
  }

  return undefined;
}

function isNavActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navigation() {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <header className={styles.navContainer}>
      <h1 className={styles.logo}>
        <Link href="/">Nebiyou Hailemariam</Link>
        {pageTitle ? (
          <span className={styles.pageTitle}>
            <span className={styles.pageTitleDash}>—</span> {pageTitle}
          </span>
        ) : null}
      </h1>
      <nav className={styles.navigation}>
        {navLinks.map((navLink) => (
          <Link
            key={navLink.href}
            href={navLink.href}
            className={`${styles.navItem} ${
              isNavActive(pathname, navLink.href) ? styles.navItemActive : ""
            }`}
          >
            {navLink.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
