import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUser } from '../../store/slices/userSlice';
import Spinner from '../Spinner/Spinner';

const WithAuth = (Component, props) => {
  class WithUser extends React.Component {
    componentDidMount() {
      if (!this.props.data) {
        this.props.getUser();
      }
    }

    render() {
      if (this.props.error) return <Redirect to="/" />;

      return (
        <>
          {this.props.isFetching ? (
            <Spinner mtop />
          ) : (
            <Component
              history={this.props.history}
              match={this.props.match}
              {...props}
            />
          )}
        </>
      );
    }
  }

  const mapStateToProps = (state) => state.userStore;

  const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithUser);
};

export default WithAuth;


// import OnlyNotAuthorizedUserHoc from './components/OnlyNotAuthorizedUserHoc/OnlyNotAuthorizedUserHoc';
// import PrivateHoc from './components/PrivateHoc/PrivateHoc';