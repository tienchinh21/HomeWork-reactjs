const UserName = ({ onUserNameChange }) => {
    const handleKeyup = (e) => {
        const value = e.target.value;
        onUserNameChange(value);
    };
    return (
        <div className="input-UserName">
            <label htmlFor="">UserName: </label>
            <input
                onKeyUp={handleKeyup}
                type="text"
                placeholder="enter username..."
            />
        </div>
    );
};

export default UserName;
