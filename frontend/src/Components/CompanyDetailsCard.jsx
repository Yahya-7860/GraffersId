import React, { useEffect, useState } from "react";
import styles from "../CSS Folder/companyDetailsCard.module.css";
import DetailedCompanyModal from "../modal/DetailedCompanyModal";


const reviews = [
    {
        name: "shamin ansari",
        dateTime: '10/12/2024 10:45',
        description: "Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque, consequuntur blanditiis natus ipsum atque. Harum reiciendis nobis hic velit? ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, atque."
    },
    {
        name: "shamin ansari",
        dateTime: '10/12/2024 10:45',
        description: "Lorem ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque, consequuntur blanditiis natus ipsum atque. Harum reiciendis nobis hic velit?, dolor sit amet consectetur adipisicing elit. Tenetur, atque."
    },
    {
        name: "shamin ansari",
        dateTime: '10/12/2024 10:45',
        description: "Lorem ipsum, dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque, consequuntur blanditiis natus ipsum atque. Harum reiciendis nobis hic velit? sit amet consectetur adipisicing elit. Tenetur, atque."
    },
    {
        name: "shamin ansari",
        dateTime: '10/12/2024 10:45',
        description: "Lorem ipsum, dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque, consequuntur blanditiis natus ipsum atque. Harum reiciendis nobis hic velit? sit amet consectetur adipisicing elit. Tenetur, atque."
    },
    {
        name: "shamin ansari",
        dateTime: '10/12/2024 10:45',
        description: "Lorem ipsum, dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque, consequuntur blanditiis natus ipsum atque. Harum reiciendis nobis hic velit? sit amet consectetur adipisicing elit. Tenetur, atque."
    },

]

const CompanyDetailsCard = ({ name, location, foundedDate, id }) => {
    const [reviews, setReviews] = useState([]);

    const options = {
        method: "GET",
    }

    const getReviews = () => {
        fetch(`http://localhost:3000/review/getReviews?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
                setReviews(data.result)
            })
    }

    const [state, setState] = useState({
        isDetailedModalOpen: false
    });

    const hclick = () => {
        setState((pre) => ({ ...pre, isDetailedModalOpen: true }))
        getReviews();
    }


    return (
        <>
            <div className={styles.card}>
                <div className={styles.logoSection}>
                    <img src="/images/companyLogo2.webp" alt={`${name} Logo`} className={styles.logo} />
                </div>
                <div className={styles.infoSection}>
                    <h3 className={styles.companyName}>{name}</h3>
                    <p className={styles.location}>{location}</p>
                </div>
                <div className={styles.detailsSection}>
                    <p className={styles.foundedDate}>Founded Date: {foundedDate}</p>
                    <button className={styles.reviewButton} onClick={hclick}>Detail Review</button>
                </div>
            </div>
            {state.isDetailedModalOpen && <DetailedCompanyModal {...{
                id,
                name,
                location,
                foundedDate,
                reviews,
                setState
            }} />}
        </>
    );
};

export default CompanyDetailsCard;
