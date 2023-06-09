import UserName from "./UserName";
const WrapperUserName = ({ onUserNameChange }) => {
    const handleUserNameChange = (value) => {
        onUserNameChange(value);
    };

    return <UserName onUserNameChange={handleUserNameChange} />;
};

export default WrapperUserName;
