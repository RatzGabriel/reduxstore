import useAdminAuth from '../CustomHooks/useAdminAuth';

const WithAdminAuth = (props) =>
  useAdminAuth(props) ? props.children : <div>Your not an Admin</div>;

export default WithAdminAuth;
