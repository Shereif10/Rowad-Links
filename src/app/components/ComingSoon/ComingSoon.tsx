"use client";

import styles from "./ComingSoon.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <main className={styles.page}>
      {/* glow layers */}
      <div className={styles.glow}></div>
      <div className={styles.glow2}></div>

      <div className={styles.content}>
        {/* HEADER */}
        <div className={styles.header}>
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className={styles.logo}
            priority
          />

          <h1 className={styles.title}>Coming Soon</h1>

          <p className={styles.subtitle}>
            A structured gateway for investors entering the Saudi market.
            <br />
            Built with precision, governance, and clarity.
          </p>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider}></div>

        {/* SECTIONS */}
        <div className={styles.sections}>
          <div className={styles.block}>
            <h3>Structure</h3>
            <p>We design compliant entry frameworks.</p>
          </div>

          <div className={styles.block}>
            <h3>Control</h3>
            <p>We ensure governance before execution.</p>
          </div>

          <div className={styles.block}>
            <h3>Clarity</h3>
            <p>We simplify investment pathways.</p>
          </div>
        </div>

        {/* FOOTER */}
        <div className={styles.footer}>
          <p>Launching Soon — Stay Connected</p>

          {/* 🔥 لينك للـ Social Links */}
          <Link href="/social-links" className={styles.socialLink}>
            Go to Social Links →
          </Link>
        </div>
      </div>
    </main>
  );
}
