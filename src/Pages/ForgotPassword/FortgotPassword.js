import React, { useState } from 'react';
import Button from '../../Components/Elements/Button/Button';
import FormInput from '../../Components/Elements/Form/Form';
import { resetEmail } from '../../firebase/Utils';

function FortgotPassword() {
  const [email, setEmail] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    resetEmail(email);
    setEmail('');
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <FormInput
          type="email"
          label="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Button type="submit">Send Email with Password</Button>
      </form>
    </div>
  );
}

export default FortgotPassword;
