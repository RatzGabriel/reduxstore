import React from 'react';

const AdminLayout = (props) => {
  return (
    <div className="adminLayout">
      <div className="content">{props.children}</div>
    </div>
  );
};

export default AdminLayout;
