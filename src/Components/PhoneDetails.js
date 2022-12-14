import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";


const PhoneDetails = () => {

    const{phoneid} = useParams();

    const[phoneData, setPhoneData] = useState({});

    useEffect(() =>{
        fetch("http://localhost:8000/phones/" + phoneid).then((res) => {
            return res.json();
        }).then((resp) => {
            setPhoneData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    return (
        <div>
            { 
            phoneData &&
            <div>
                <h2>Phone Details</h2>
                <br></br>
                <h3><b>Phone Name:</b> {phoneData.phoneName}</h3>
                <h3><b>Model:</b> {phoneData.phoneModel}</h3>
                <h3><b>Brand:</b> {phoneData.phoneBrand}</h3>
                <h3><b>Price:</b> {phoneData.phonePrice}</h3>
                <Link className="btn btn-danger" to="/">Back to Listing</Link>
            </div>
            }
        </div>
    );
}

export default PhoneDetails;