import React from "react";
import styles from "../CSS Folder/navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { MdStars } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <MdStars className={styles.star} />
                <div><span >Review</span><span className={styles.end}>&</span><span className={styles.bold}>Rate</span></div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className={styles.searchInput}
                    />
                    <div><CiSearch className={styles.searchIcon} /></div>
                </div>
                <div className={styles.authButtons}>
                    <button className={styles.button}>Sign Up</button>
                    <button className={styles.button}>Login</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
