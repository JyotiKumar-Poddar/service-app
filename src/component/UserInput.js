import React, { useState, useEffect } from 'react'
import * as apiService from '../api/serviceApi'

const UserInput = () => {
    const [name, setName] = useState("");
    function handleChange({ target }) {
        setName(target.value);

    }
    const empData = {
        id: Math.floor(Math.random() * Math.floor(100)),
        employee_name: '',
        employee_salary: "1500",
        employee_age: "34",
        profile_image: ""
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("calling api");
        empData.employee_name = name
        apiService.saveEmployee(empData);
    }
    return <>
        <form onSubmit={handleSubmit}>
            <div className="col py-3 px-lg-5 border bg-light align-items-center">
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input id='userName' name='userName' type="text"
                            onChange={handleChange}
                            value={name}
                            className="form-control"
                            placeholder="Enter name"
                            aria-label="Enter name"
                            aria-describedby="basic-addon2" />

                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit" value="Submit" >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </>

}

export default UserInput