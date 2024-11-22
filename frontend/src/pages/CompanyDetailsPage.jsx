import React, { useEffect, useState } from "react";
import CompanyDetailsCard from "../Components/CompanyDetailsCard";
import styles from "../CSS Folder/CompanyDetailsPage.module.css"
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../slice/companySlice";

function CompanyDetailsPage() {
    const [details, setDetails] = useState([]);
    // const dispatch = useDispatch();
    const options = {
        method: "GET"
    }
    const func = async () => {
        await fetch('http://localhost:3000/getAll', options)
            .then((res) => res.json())
            .then((data) => {
                // const response = data.result;
                // dispatch(addList(response))
                setDetails(data.result)
            })
    }
    useEffect(() => {
        func();
    }, []);

    // const details = useSelector(state=>state.list.list)


    return <div className={styles.centerContainer}>
        {details.map((one) => (
            <CompanyDetailsCard key={one.name} name={one.name} location={one.location} foundedDate={one.foundDate} id={one._id} />
        ))}
    </div>;
}

export default CompanyDetailsPage;
