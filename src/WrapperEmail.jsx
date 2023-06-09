
import Email from "./Email";
const WrapperEmail = ({ onEmailChange }) => {
    const handleEmailChange = (value) => {
        onEmailChange(value);
    };

    return <Email onEmailChange={handleEmailChange} />;
};
export default WrapperEmail;
