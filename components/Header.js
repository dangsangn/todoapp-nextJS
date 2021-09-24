import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
function Header(props) {
  return (
    <div className={styles.link}>
      <Link href="/">
        <a className={styles.logo}>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
    </div>
  );
}

export default Header;
