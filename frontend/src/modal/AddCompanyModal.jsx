import React, { useRef, useState } from "react";
import styles from "../CSS Folder/addCompanyModal.module.css";
import { SlLocationPin } from "react-icons/sl";

const AddCompanyModal = ({ setState }) => {

    const nameRef = useRef(null);
    const locationRef = useRef(null);
    const foundDateRef = useRef(null);
    const cityRef = useRef(null);

    const hclick = () => {
        setState((pre) => ({ ...pre, isModalOpen: false }))
    }
    const hSubmit = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const location = locationRef.current.value;
        const foundDate = foundDateRef.current.value;
        const city = cityRef.current.value;

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, location, foundDate, city }),
        };
        await fetch('http://localhost:3000/addProfile', options)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                hclick();
            })

    }
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <button className={styles.closeButton} onClick={hclick}>
                    ✖
                </button>
                <h2 className={styles.heading}>Add Company</h2>
                <form className={styles.form} onSubmit={hSubmit}>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor="companyName">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            className={styles.input}
                            placeholder="Enter company name"
                            ref={nameRef}
                        />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor="location">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            className={styles.input}
                            placeholder="Enter location"
                            ref={locationRef}

                        />

                    </div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor="foundedOn">
                            Founded On
                        </label>
                        <input type="date" id="foundedOn" className={styles.input} ref={foundDateRef} />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor="city">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            className={styles.input}
                            placeholder="Enter city"
                            ref={cityRef}
                        />
                    </div>
                    <button type="submit" className={styles.saveButton}>
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCompanyModal;
