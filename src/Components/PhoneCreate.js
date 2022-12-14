import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite"

const PhoneCreate = () => {

    const[phoneName, setPhoneName] = useState("");
    const[phoneImage, setPhoneImage] = useState("");
    const[phoneModel, setPhoneModel] = useState("");
    const[phoneBrand, setPhoneBrand] = useState("");
    const[phonePrice, setPhonePrice] = useState("");
    const[validation, setValidation] = useState(false);

    const navigate = useNavigate();

    const handleSubmit=(e)=> {
        e.preventDefault();
        const phoneData = {phoneName, phoneImage, phoneModel, phoneBrand, phonePrice};

        fetch("http://localhost:8000/phones",{
            method:"POST",
            headers:{"content-type": "application/json"},
            body: JSON.stringify(phoneData)
        }).then((res) => {
            alert("Saved succesfully.")
            navigate('/');
        }).catch((err) => {
            console.log(err.message);
        }) 
    }

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Phone Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={phoneName} onMouseDown={e=>setValidation(true)} onChange={e=>setPhoneName(e.target.value)} className="form-control"></input>
                                            {phoneName.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Image</label>
                                            <input required value={phoneImage} onMouseDown={e=>setValidation(true)} onChange={e=>setPhoneImage(e.target.value)} className="form-control" placeholder="Please provide the image URL"></input>
                                        </div>
                                    </div>

                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Model</label>
                                            <input value={phoneModel} onChange={e=>setPhoneModel(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone Brand</label>
                                            <input value={phoneBrand} onChange={e=>setPhoneBrand(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone Price</label>
                                            <input value={phonePrice} onChange={e=>setPhonePrice(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                          <button className="btn btn-success" type="submit">Save</button>
                                          <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default observer(PhoneCreate);