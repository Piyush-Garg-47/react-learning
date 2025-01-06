import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userid } = useParams();

  return (
    <div>
      <h1>User Page</h1>
      <p>User ID: {userid}</p>
    </div>
  );
};

export default User;