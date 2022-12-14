import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer, useObserver } from "mobx-react-lite"

const PhoneListing = () => {
    const [phoneData, setPhoneData] = useState(null);
    const navigate = useNavigate();
    const LoadDetails=(id)=> {
        navigate("/phones/details/"+id);
    }

    const LoadEdit=(id)=> {
        navigate("/phones/edit/"+id);
    }

    const RemoveFunction=(id)=> {
        if(window.confirm('Do you want to remove?')){
            fetch("http://localhost:8000/phones/" + id, {
            method:"DELETE"
        }).then((res) => {
            alert("Removed succesfully.")
            window.location.reload();
        }).catch((err) => {
            console.log(err.message);
        }) 
        }
    }

    useEffect(() => {
        fetch("http://localhost:8000/phones").then((res) => {
            return res.json();
        }).then((resp) => {
            setPhoneData(resp); 
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

return useObserver( () => (
    <div className="container">
        <div className="card">
            <div className="card-title">
                <h2>Phone List</h2>
            </div>
            <div className="card-body">
                <div className="divbtn">
                    <Link to="phones/create" className="btn btn-success">Add New Phone(+)</Link>
                </div>
                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>Phone ID</td>
                            <td>Phone Name</td>
                            <td>Phone Image</td>
                            <td>Phone Model</td>
                            <td>Phone Brand</td>
                            <td>Phone Price</td>
                            <td>Options</td>
                        </tr>
                    </thead>
                    <tbody>
                        {   phoneData &&
                            phoneData.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.phoneName}</td>
                                    <td><img src={item.phoneImage} alt="Phone Image" style={{height:"250px", width: "250px"}}/></td>
                                    <td>{item.phoneModel}</td>
                                    <td>{item.phoneBrand}</td>
                                    <td>{item.phonePrice}</td>
                                    <td>
                                            <a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { RemoveFunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetails(item.id) }} className="btn btn-primary">Details</a>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
        
    </div>
));
}
 
export default observer(PhoneListing);