import React, { useState } from "react";

interface Props {
  userName: string;
  setFullName: (fullName: string) => void;
}

const SignUp = ({ userName, setFullName }: Props) => {
  const [tempName, setTempName] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTempName(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFullName(tempName);
    setTempName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="full-name">Your Name</label>
      <input
        onChange={handleChange}
        type="text"
        name="full-name"
        id="full-name"
        value={tempName}
      />
      <button type="submit">Find the truth</button>
    </form>
  );
};

export default SignUp;
