import * as React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { callApi } from '../helpers/axios_helper';
import { getUser, login, logout } from '../helpers/auth_helper';

import AuthContent from './AuthContent';
import Buttons from './Buttons';

export default class AppContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user: {}, api: "" };
        this.shouldCancel = false;
    }

    componentDidMount() {
        this.getUser();
    }

    login = () => {
        login();
    };

    callApi = () => {
        callApi()
            .then(response => {
                this.setState({ api: response.data });
                toast.success('Api return successfully data, check in section - Api response');
            })
            .catch(error => {
                toast.error(error);
            });
    };

    componentWillUnmount() {
        this.shouldCancel = true;
    }

    logout = () => {
        logout();
    };

    getUser = () => {
        getUser().then(user => {
            if (user) {
                toast.success('User has been successfully loaded from store.');
            } else {
                toast.info('You are not logged in.');
            }

            if (!this.shouldCancel) {
                this.setState({ user });
            }
        });
    };

  render() {
    return (
      <>
        <ToastContainer />

        <Buttons
          login={this.login}
          logout={this.logout}
          getUser={this.getUser}
          callApi={this.callApi}
        />

        {this.state.api && <AuthContent data={this.state.api} user={this.state.user} />}
      </>
    );
  }
}
