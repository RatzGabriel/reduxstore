import React from 'react';
import {Link} from "react-router-dom"
import PersonIcon from '@material-ui/icons/Person';


function SignedOut({signIn}) {
  return (
    <div><Link to="/signIn">
    <PersonIcon/></Link>
</div>
  )
}

export default SignedOut


