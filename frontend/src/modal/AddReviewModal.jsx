import React, { useRef } from "react";
import styles from "../CSS Folder/addReviewModal.module.css";

const AddReviewModal = ({ setAddReview, id }) => {
    const nameRef = useRef(null)
    const subjectRef = useRef(null)
    const reviewRef = useRef(null)

    const hclick = () => {
        setAddReview(false)
    }

    const hSubmit = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const subject = subjectRef.current.value;
        const description = reviewRef.current.value;
        const companyId = id;

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, subject, description, companyId }),
        };
        await fetch('http://localhost:3000/review/addReview', options)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                hclick();
            })
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <button className={styles.closeButton} onClick={hclick}>
                    ✖
                </button>
                <h2 className={styles.modalHeading}>Add Review</h2>
                <form className={styles.form} onSubmit={hSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="fullName" className={styles.label}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className={styles.input}
                            placeholder="Enter"
                            ref={nameRef}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="subject" className={styles.label}>
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className={styles.input}
                            placeholder="Enter"
                            ref={subjectRef}

                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="review" className={styles.label}>
                            Enter Your Review
                        </label>
                        <textarea
                            id="review"
                            name="review"
                            className={styles.textarea}
                            placeholder="Description"
                            ref={reviewRef}

                        />
                    </div>
                    <button type="button" className={styles.saveButton}>
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddReviewModal;
