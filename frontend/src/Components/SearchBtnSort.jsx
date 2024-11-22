import React, { useRef, useState } from "react";
import styles from "../CSS Folder/searchBtnSort.module.css";
import { CiLocationOn } from "react-icons/ci";
import AddCompanyModal from "../modal/AddCompanyModal";


const SearchBar = () => {
    const textRef = useRef();
    const [state, setState] = useState({
        isModalOpen: false
    });

    const hclick = () => {
        setState((pre) => ({ ...pre, isModalOpen: true }))
    }

    const hSearchClick = () => {
        const city = textRef.current.value;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ city }),
        };
        fetch('http://localhost:3000/search/byCityName', options)
            .then((res) => res.json())
            .then((data) => { })
    }

    return (<><div className={styles.searchBarContainer}>
        <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="city">Select City</label>
            <div className={styles.searchGroup}>
                <div className={styles.input}>
                    <input
                        type="text"
                        id="city"
                        className={styles.search}
                        placeholder="Enter city name"
                        ref={textRef}
                    />
                    <CiLocationOn />
                </div>

                <button className={styles.findButton} onClick={hSearchClick}>Find Company</button>
            </div>
        </div>
        <button className={styles.addButton} onClick={hclick}>+ Add Company</button>
        <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="sort">Sort</label>
            <select id="sort" className={styles.select}>
                <option value="name">Name</option>
                <option value="average">Average</option>
                <option value="rating">Rating</option>
                <option value="location">Location</option>
            </select>
        </div>
    </div>
        {state.isModalOpen && <AddCompanyModal {...{ setState }} />}

    </>

    );
};

export default SearchBar;
