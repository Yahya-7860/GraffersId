import React, { useState } from "react";
import styles from "../CSS Folder/detailedCompanyModal.module.css";
import Review from "../Components/Review";
import AddReviewModal from "./AddReviewModal";

const DetailedCompanyModal = ({
    id,
    name,
    location,
    foundedDate,
    reviews,
    setState
}) => {

    const [addReview, setAddReview] = useState(false);
    const hclick = () => {
        setState((pre) => ({ ...pre, isDetailedModalOpen: false }))
    }
    const hAddReviewClick = () => {
        setAddReview(true)
    }
    return (
        <>
            <div className={styles.modalOverlay}>
                <div className={styles.modalContainer}>
                    <button className={styles.closeButton} onClick={hclick}>
                        ✖
                    </button>
                    <div className={styles.companyDetails}>
                        <div className={styles.logoSection}>
                            <img src="/images/companyLogo2.webp" alt={`${name} Logo`} className={styles.logo} />
                        </div>
                        <div className={styles.infoSection}>
                            <h3 className={styles.companyName}>{name}</h3>
                            <p className={styles.location}>{location}</p>
                        </div>
                        <div className={styles.detailsSection}>
                            <p className={styles.foundedDate}>Founded: {foundedDate}</p>
                            <button className={styles.addReviewButton} onClick={hAddReviewClick}>Add Review</button>
                        </div>
                    </div>
                    <div className={styles.reviewsSection}>
                        {reviews.map((review, index) => (
                            <Review
                                key={index}
                                name={review.name}
                                dateTime={review.dateTime}
                                description={review.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {addReview && <AddReviewModal {...{ setAddReview, id }} />}
        </>
    );
};

export default DetailedCompanyModal;
