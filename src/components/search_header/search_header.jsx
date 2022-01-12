import styles from "./search_header.module.css";
import React, { useRef } from "react";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    onSearch(inputRef.current.value);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      console.log("inputRef.current.value", inputRef.current.value);
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.h1}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        onKeyDown={onKeyDown}
      />
      <button className={styles.btn} type="submit" onClick={onClick}>
        <img className={styles.btn_img} src="/images/search.png" alt="search" />
      </button>
    </header>
  );
};
export default SearchHeader;
