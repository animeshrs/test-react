import { Table } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const Users = () => {
    const arr = [];

    useEffect(() => {
        fetch("http://dummy.restapiexample.com/api/v1/employees")
            .then((response) => {
                response.json().then((result) => {
                    console.log('result', result.data);
                    setUsers(result.data);
                })
            })
    }, []);

    const [users, setUsers] = useState(arr);

    const log = (e) => [
        console.log(e.target)
    ]

    return (
        <div>
            <p>Users Component</p>
            {/* <h5>{users.length} Users</h5>
            {
                users.map((e, i) => (
                    <div key={i}>{e.name}, {e.age}</div>
                ))
            }
            { users.length <= 3
                ? <h4>Yes</h4>
                : <h4>No</h4>
            } */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((e, i) => {
                        return (<tr key={i}>
                            <td>{i + 1}</td>
                            <td>{e.employee_name}</td>
                            <td>{e.employee_age}</td>
                        </tr>)
                    })}
                </tbody>
            </Table>

        </div>
    )
}

export default Users