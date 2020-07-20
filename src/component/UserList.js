import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import * as apiService from '../api/serviceApi'


const UserList = props => {
    const [users, setUsers] = useState();
    const [user, setUser] = useState("");

    useEffect(() => {
        console.log("users ", users)
        if (users == null)
            apiService.getEmployee().then(_users => setUsers(_users.data));
    }, []);
    /*useEffect(() => {
            apiService.getEmployee().then(_users => setUsers(_users.data));
    }, []); */

    function handleChange({ target }) {
        setUser(target.value);
    };

    function clearSearch({ target }) {
        setUser('');
        apiService.getEmployee().then(_users => setUsers(_users.data));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    useEffect(() => {
        if (user) {
            apiService.getEmployeeById(user).then(_users => setUsers(_users.data));
        }
    }, [user]);

    const handleDelete = (event) => {
        apiService.deleteEmployee(event.target.value)
            .then(v => apiService.getEmployee()
                .then(_users => setUsers(_users.data)));
        ;
    };
    return <>
        <div className="col py4 px-lg-6 border bg-light">
            <div className="card-body">
                <form onSubmit={handleSubmit} >
                    <div className="col py-3 px-lg-5 border bg-light align-items-center">
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <input id='userName' name='userName' type="text"
                                    onChange={handleChange}
                                    value={user}
                                    className="form-control"
                                    placeholder="Enter id for search"
                                    aria-label="Enter naid for search"
                                    aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit" value="submit" >Search</button>
                                </div>
                                <div className="input-group-append">
                                    <button className="btn btn-light" onClick={clearSearch} type="button">Clear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <table className='table table-hover'>
                    <thead className='table-active'>
                        <tr><th >Id</th>
                            <th >Name</th>
                            <th>Salary</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users ? users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.employee_name}</td>
                                    <td>{user.employee_salary}</td>
                                    <td>{user.employee_age}</td>
                                    <td>
                                        <button type="button" name='delete' value={user.id} onClick={e => handleDelete(e)} className="btn btn-warning">Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                            : <tr>
                                <td align='center' colSpan='5'>No records</td>

                            </tr>}
                    </tbody>
                </table>
            </div>
        </div>
    </>
}


export default UserList;