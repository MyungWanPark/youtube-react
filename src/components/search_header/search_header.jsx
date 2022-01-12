import styles from "./search_header.module.css";
import React from "react";

const SearchHeader = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.h1}>Youtube</h1>
      </div>
      <input className={styles.input} type="search" />
      <button className={styles.btn}>
        <img className={styles.btn_img} src="/images/search.png" alt="search" />
      </button>
    </header>
  );
};
export default SearchHeader;
