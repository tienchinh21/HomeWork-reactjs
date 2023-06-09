import Password from "./PassWord";

const WrapperPassWord = ({ onPasswordChange }) => {
    const handlePasswordChange = (value) => {
        onPasswordChange(value);
    };

    return <Password onPasswordChange={handlePasswordChange} />;
};

export default WrapperPassWord;
