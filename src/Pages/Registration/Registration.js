import React, { useState } from 'react';
import FormInput from '../../Components/Elements/Form/Form';

function Registration() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div>
      <form action="">
        <FormInput
          onChange={(e) => setDisplayName(e.target.value)}
          label="displayName"
          type="text"
          value={displayName}
        />
        <FormInput
          onChange={(e) => setEmail(e.target.value)}
          label="email"
          type="email"
          value={email}
        />
        <FormInput
          onChange={(e) => setPassword(e.target.value)}
          label="password"
          type="password"
          value={password}
        />
        <FormInput
          onChange={(e) => setConfirmPassword(e.target.value)}
          label="confirmPassword"
          type="password"
          value={confirmPassword}
        />

        <button onClick={() => console.log(displayName)}></button>
      </form>
    </div>
  );
}

export default Registration;
