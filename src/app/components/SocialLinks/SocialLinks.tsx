"use client";

import styles from "./SocialLinks.module.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSnapchat,
} from "react-icons/fa";
import Image from "next/image";

export default function SocialLinks() {
  const links = [
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: "#" },
    { name: "Twitter (X)", icon: <FaTwitter />, url: "https://x.com/rowaelqema" },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/people/RowadElqema/61570868981119/",
    },
    { name: "Instagram", icon: <FaInstagram />, url: "#" },
    { name: "Snapchat", icon: <FaSnapchat />, url: "#" },
    { name: "Contact Email", icon: <FaEnvelope />, url: "#" },
    { name: "Our Location", icon: <FaMapMarkerAlt />, url: "#" },
  ];

  return (
    <main className={styles.page}>
      <div className={styles.bg}></div>
      <div className={styles.noise}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <Image
            src="/logo.svg"
            alt="logo"
            width={120}
            height={120}
            className={styles.logo}
            priority
          />

          <h1 className={styles.title}>Rowad Al Qimma</h1>

        </div>

        <div className={styles.divider}></div>

        <div className={styles.links}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={styles.linkItem}
              style={{ animationDelay: `${index * 0.06}s` }}
              target="_blank"
            >
              <span className={styles.icon}>{link.icon}</span>
              <span>{link.name}</span>
              <span className={styles.arrow}>→</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
