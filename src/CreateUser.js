import React, { useState } from 'react';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');

    let data = { name, age, address };

    const create = () => {
        console.log('clicked', data);
    }

    return (
        <div className="App">
            <h1>Create a new User</h1>
            <input type="text" name="Username" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <input type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
            <br />
            <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <br />
            <button onClick={create} className="btn">Create User</button>
        </div>
    );
};

export default CreateUser;