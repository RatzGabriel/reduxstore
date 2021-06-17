import React, { useState } from 'react';
import Button from '../../Components/Elements/Button/Button';
import FormInput from '../../Components/Elements/Form/Form';
import { auth, handleUserProfile } from '../../firebase/Utils';

function Registration() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [err, setError] = useState([]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError(['Passwords dont Match']);
      return;
    } else {
      setError([]);
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await handleUserProfile(user, displayName);
        setError([]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          onChange={(e) => setDisplayName(e.target.value)}
          label="DisplayName"
          type="text"
          value={displayName}
        />
        <FormInput
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          type="email"
          value={email}
        />
        <FormInput
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          value={password}
        />
        <FormInput
          onChange={(e) => setConfirmPassword(e.target.value)}
          label="ConfirmPassword"
          type="password"
          value={confirmPassword}
        />
        <Button type="submit">Form Submit</Button>
        {err && <div>{err}</div>}
      </form>
    </div>
  );
}

export default Registration;
