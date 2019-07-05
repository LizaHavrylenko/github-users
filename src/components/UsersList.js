import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UsersList = users => (
  <div className="listContainer">
    {users &&
      users.length > 0 &&
      users.map(user => (
        <Link to={`/users/${user.login}`} key={user.id} className="linkToUser">
          <div className="listItem">
            <img src={user.avatar_url} alt="Avatar" className="avatar small" />
            <div className="shortInfo">
              <span>{user.login}</span>
              <span>{user.html_url}</span>
            </div>
          </div>
        </Link>
      ))}
  </div>
);

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UsersList;
