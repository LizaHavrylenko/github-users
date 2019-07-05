import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../redux/actions';
import UsersList from '../components/UsersList';

class MainPage extends Component {
  state = {
    users: [],
    error: false,
    hasMore: true,
    isLoading: false,
  };

  componentDidMount() {
    window.onscroll = () => {
      const { error, users, isLoading, hasMore } = this.state;

      if (error || isLoading || !hasMore || users.length === 0) {
        return;
      }

      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1
      ) {
        this.props.getUsers(this.getNextUserId());
      }
    };

    this.props.getUsers(0);
    this.setState({
      isLoading: true,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.users !== this.props.users) {
      this.setState({
        users: [...prevState.users, ...this.props.users],
        linkToNext: this.props.linkToNext,
        hasMore: this.state.users.length < 100,
      });
    }

    if (
      this.props.usersLoaded &&
      prevProps.usersLoaded !== this.props.usersLoaded
    ) {
      this.setState({
        isLoading: false,
      });
    }

    if (this.props.getUsersError) {
      this.setState({
        error: true,
      });
    }
  }

  getNextUserId = () => {
    const { linkToNext: link } = this.state;

    if (link) {
      const idIndex = link.indexOf('&') + 7;
      const id = link.slice(idIndex, link.indexOf('>'));

      return id;
    }
  };

  render() {
    const { users, hasMore } = this.state;

    return (
      <Fragment>
        <h1>Github Users</h1>
        <UsersList users={users} />
        {!hasMore && (
          <p>
            There are no more users to browse. Preview is limited to 120 users.
          </p>
        )}
      </Fragment>
    );
  }
}

MainPage.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  usersLoaded: PropTypes.bool.isRequired,
  usersError: PropTypes.object,
  linkToNext: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  usersLoaded: state.get('usersLoaded'),
  usersError: state.get('getUsersError'),
  users: state.get('users'),
  linkToNext: state.get('linkToNext'),
});

export default connect(
  mapStateToProps,
  { getUsers },
)(MainPage);
