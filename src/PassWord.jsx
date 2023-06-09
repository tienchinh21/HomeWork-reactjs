const Password = ({ onPasswordChange }) => {
    const handleKeyup = (e) => {
      const value = e.target.value;
      onPasswordChange(value);
    };
    return (
      <div className="input-Password">
        <label htmlFor="">Password: </label>
        <input
            onKeyUp={handleKeyup}
            type="password"
            placeholder="enter password..."
        />
      </div>
    );
  };

  export default Password;
