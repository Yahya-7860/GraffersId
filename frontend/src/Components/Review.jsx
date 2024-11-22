import React from "react";
import styles from "../CSS Folder/review.module.css";

const Review = ({ name, dateTime, description }) => {
    return (
        <div className={styles.reviewContainer}>
            <div className={styles.profileSection}>
                <img src='/images/CompanyLogo.jpg' alt={`${name} Profile`} className={styles.profilePhoto} />
            </div>
            <div className={styles.reviewContent}>
                <div className={styles.header}>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.dateTime}>{dateTime}</p>
                </div>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default Review;
