import React, { useState } from 'react'
import MenubarAdmin from "../../layout/MenubarAdmin";
import { useSelector } from 'react-redux';
import FileUpload from './FileUpload';
import { createPlant } from '../../function/plant';


const CreatePlant = () => {


    const { user } = useSelector((state) => ({ ...state }));
    const [value, setValue] = useState({
        name: "",
        category: "",
        description: "",
        image: "",
    });
    console.log(user);

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value, });
        console.log(value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createPlant(value).then((res) => {
            console.log(res.data);
            alert("Create Successfully")
            switch (res?.status) {
                case 200:
                    localStorage.setItem("accessToken", res.data.token);
                    localStorage.setItem("userId", res.data.userId);
                    console.log(res.err)
                    break;
                case 401:
                    alert(res.data.message);
                    break;
                default:
                    break
            }
        })
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <h1 style={{ textAlign: 'center' }} >Plant</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <MenubarAdmin />
                </div>
            </div>
            <form onSubmit={handleSubmit} className="container">
                <h1>Create Plant</h1>

                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" className="form-control"
                        value={value.name}
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Category:</label>
                    <input type="text" name="category" className="form-control"
                        value={value.category}
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <textarea name="description" className="form-control"
                        value={value.description}
                        onChange={handleChange}></textarea>
                </div>


                <div className="form-group">
                    <label>Image:</label>
                    <input type="text" name="image" className="form-control"
                        value={value.image}
                        onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">
                    Create
                </button>

            </form>
        </div>
    )
};

export default CreatePlant;