const Email = ({ onEmailChange }) => {
    const handleKeyup = (e) => {
        const value = e.target.value;
        onEmailChange(value);
    };
    return (
        <div className="input-Email">
            <label htmlFor="">Email: </label>
            <input
                onKeyUp={handleKeyup}
                type="text"
                placeholder="enter email..."
            />
        </div>
    );
};
export default Email;
