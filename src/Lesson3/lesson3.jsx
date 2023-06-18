import { useEffect, useState } from "react";

const HookUseEffect = () => {
    const [firstname, setFirstName] = useState('');
    const [middlename, setMiddleName] = useState('');
    const [lastname, setLastName] = useState('');
    const [fullname, setFullName] = useState('');

    const setFirstNameValue = (e) => {
        setFirstName(e.target.value);
    };
    const setMiddleNameValue = (e) => {
        setMiddleName(e.target.value);
    };
    const setLastNameValue = (e) => {
        setLastName(e.target.value);
    };

    const fullName = () => {
        setFullName(`${firstname} ${middlename} ${lastname}`);
    };

    useEffect(() => {
        if (firstname.length > 0 && middlename.length > 0 && lastname.length > 0) {
            fullName();
        }
    }, [firstname, middlename, lastname]);

    return (
        <div>
            <input type="text" placeholder="enter first name" value={firstname} onChange={setFirstNameValue} /> <br />
            <input type="text" placeholder="enter middle name" value={middlename} onChange={setMiddleNameValue} /> <br />
            <input type="text" placeholder="enter last name" value={lastname} onChange={setLastNameValue} />
            <div>{fullname}</div>
        </div>
    );
};

export default HookUseEffect;
