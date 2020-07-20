import React, { useState, useEffect } from 'react'
import * as apiService from '../api/serviceApi'
import UserList from "./UserList"

const UserInput = () => {
    const [name, setName] = useState("");
    const [users, setUsers] = useState();

    useEffect(() => {
        apiService.getEmployee().then(_users => setUsers(_users.data));
    }, []);

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
        empData.employee_name = name
        apiService.saveEmployee(empData).then(v => {


            //usersCopy.push(v.data);
            setUsers(v.data);
        });
    }

    const handleDelete = (event) => {
        apiService.deleteEmployee(event.target.value)
            .then(v => apiService.getEmployee()
                .then(_users => setUsers(_users.data)));
        ;
    };
    function clearSearch() {
        apiService.getEmployee().then(_users => setUsers(_users.data));
    };


    const handleSearch = (id) => {
        console.log(id);
        // event.preventDefault();
        apiService.getEmployeeById(id).then(_users => setUsers(_users.data));

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
        <UserList users={users} handleDelete={handleDelete}
            clearSearch={clearSearch} handleSearch={handleSearch} />
    </>

}

export default UserInput