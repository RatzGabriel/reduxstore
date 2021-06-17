import React, { useState } from 'react';
import Button from '../../Components/Elements/Button/Button';
import FormInput from '../../Components/Elements/Form/Form';
import { auth } from '../../firebase/Utils';

function SignIn({ currentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(email);
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      // console.log(err);
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} action="">
        <h1>Login</h1>
        <FormInput
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></FormInput>
        <FormInput
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></FormInput>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default SignIn;
