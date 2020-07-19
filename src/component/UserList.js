import React, { useState, useEffect } from 'react'
import * as apiService from '../api/serviceApi'

const UserList = () => {
    const [users, setUsers] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        apiService.getEmployee().then(_users => setUsers(_users.data));
    }, []);

    function handleChange({ target }) {
        setUser(target.value);

    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("calling api");
        alert(`Submitting Name ${name}`)

    }
    return <>

        <form onSubmit={handleSubmit} >
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
                            <button className="btn btn-primary" type="submit" value="submit" >Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        {console.log("==== loading UserList")}
        <table className='table table-hover'>
            <thead className='table-active'>
                <tr><th >Title</th>
                    <th>Author Id</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users ? users.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.employee_name}</td>
                            <td>{user.employee_age}</td>
                            <td>{user.employee_salary}</td>
                            <td><button type="button" className="btn btn-info">Edit</button>
                                {' '}
                                <button type="button" className="btn btn-warning">Delete</button>
                            </td>
                        </tr>
                    );
                })
                    : ''}
            </tbody>
        </table>

    </>
}


export default UserList;