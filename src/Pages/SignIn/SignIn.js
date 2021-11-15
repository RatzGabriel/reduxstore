import React from 'react';

import LoginForm from '../../Components/LoginForm';

function SignIn({ dm }) {
  return (
    <div>
      <LoginForm
        img="/images/banner1.jpeg"
        header="Login"
        buttonText="Login"
        smallText="Or Log In In With Google"
        dm={dm}
      />
    </div>
  );
}

export default SignIn;
