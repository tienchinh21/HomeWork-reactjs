import { useState } from "react";
import Heading from "./Heading";
import WrapperUserName from "./WrapperUserName";
import WrapperEmail from "./WrapperEmail";
import WrapperPassWord from "./FormPassword";


function FormWrapper() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUserNameChange = (value) => {
        setUserName(value);
    };

    const handleEmailChange = (value) => {
        setEmail(value);
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted:");
        console.log("UserName:", userName);
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="form-wrapper">
            <Heading />
            <form onSubmit={handleSubmit}>
                <WrapperUserName onUserNameChange={handleUserNameChange} />
                <WrapperEmail onEmailChange={handleEmailChange} />
                <WrapperPassWord onPasswordChange={handlePasswordChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormWrapper;
