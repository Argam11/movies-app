import React, { useRef } from "react";
import styles from "../styles/SearchBar.module.css";

interface SearchBarProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ handleChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        className={styles.search}
        placeholder="Search..."
        ref={inputRef}
        onChange={handleChange}
      />
    </div>
  );
};
