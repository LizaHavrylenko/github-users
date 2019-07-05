import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../redux/actions';
import { Link } from 'react-router-dom';

class UserPage extends Component {
  componentDidMount() {
    const { getUser } = this.props;

    getUser(this.props.match.params.username);
  }

  render() {
    const {
      name,
      followers,
      following,
      created_at,
      avatar_url,
      company,
      email,
      location,
      blog,
      bio,
    } = this.props.user;
    return (
      <Fragment>
        <img src={avatar_url} alt="Avatar" className="avatar large" />
        <div className="userInfo">
          {name && (
            <p>
              <span>Name: </span>
              {name}
            </p>
          )}
          {followers && (
            <p>
              <span>Followers: </span>
              {followers}
            </p>
          )}
          {following && (
            <p>
              <span>Following: </span>
              {following}
            </p>
          )}
          {created_at && (
            <p>
              <span>Created at: </span>
              {created_at}
            </p>
          )}
          {company && (
            <p>
              <span>Company: </span>
              {company}
            </p>
          )}
          {email && (
            <p>
              <span>Email: </span>
              {email}
            </p>
          )}
          {location && (
            <p>
              <span>Location: </span>
              {location}
            </p>
          )}
          {blog && (
            <p>
              <span>Blog: </span>
              <a href={blog}>{blog}</a>
            </p>
          )}
          {bio && (
            <p>
              <span>Bio: </span>
              {bio}
            </p>
          )}
        </div>
        <Link to="/users">
          <button className="userButton">Back to list</button>
        </Link>
      </Fragment>
    );
  }
}

UserPage.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  userLoaded: state.get('userLoaded'),
  userError: state.get('userError'),
  user: state.get('user'),
});

export default connect(
  mapStateToProps,
  { getUser },
)(UserPage);
