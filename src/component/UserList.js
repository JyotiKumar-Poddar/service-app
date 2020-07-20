import React, { useState } from 'react'

const UserList = (props) => {

    const users = props.users;
    const [user, setUser] = useState("");

    return <>
        <div className="col py4 px-lg-6 border bg-light">
            <div className="card-body">
                <form onSubmit={e => {
                    e.preventDefault();
                    props.handleSearch(user);
                }} >
                    <div className="col py-3 px-lg-5 border bg-light align-items-center">
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <input id='userName' name='userName' type="text"
                                    onChange={e => setUser(e.target.value)}
                                    value={user}
                                    className="form-control"
                                    placeholder="Enter id for search"
                                    aria-label="Enter naid for search"
                                    aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit" value="submit" >Search</button>
                                </div>
                                <div className="input-group-append">
                                    <button className="btn btn-light" onClick={e => {
                                        setUser('');
                                        props.clearSearch();
                                    }} type="button">Clear</button>
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
                                        <button type="button" name='delete' value={user.id} onClick={e => props.handleDelete(e)} className="btn btn-warning">Delete</button>
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