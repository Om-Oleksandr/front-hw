import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Payment from './pages/Payment/Payment';
import StartContestPage from './pages/StartContestPage';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home';
import ContestPage from './pages/ContestPage/ContestPage';
import UserProfile from './pages/UserProfile/UserProfile';
import ContestCreationPage from './pages/ContestCreation';
// import OnlyNotAuthorizedUserHoc from './components/OnlyNotAuthorizedUserHoc/OnlyNotAuthorizedUserHoc';
// import PrivateHoc from './components/PrivateHoc/PrivateHoc';
import NotFound from './components/NotFound/NotFound';
import ChatContainer from './components/Chat/ChatComponents/ChatContainer/ChatContainer';
import { WithAuth, WithNotAuth } from './components/HOCs';
import CONSTANTS from './constants';
import browserHistory from './browserHistory';
import PricingPage from './pages/PricingPage';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pricing" component={PricingPage} />
          <Route
            exact
            path="/login"
            component={WithNotAuth(LoginPage)}
          />
          <Route
            exact
            path="/registration"
            component={WithNotAuth(RegistrationPage)}
          />
          <Route exact path="/payment" component={WithAuth(Payment)} />
          <Route
            exact
            path="/startContest"
            component={WithAuth(StartContestPage)}
          />
          <Route
            exact
            path="/startContest/nameContest"
            component={WithAuth(ContestCreationPage, {
              contestType: CONSTANTS.NAME_CONTEST,
              title: 'Company Name',
            })}
          />
          <Route
            exact
            path="/startContest/taglineContest"
            component={WithAuth(ContestCreationPage, {
              contestType: CONSTANTS.TAGLINE_CONTEST,
              title: 'TAGLINE',
            })}
          />
          <Route
            exact
            path="/startContest/logoContest"
            component={WithAuth(ContestCreationPage, {
              contestType: CONSTANTS.LOGO_CONTEST,
              title: 'LOGO',
            })}
          />
          <Route exact path="/dashboard" component={WithAuth(Dashboard)} />
          <Route
            exact
            path="/contest/:id"
            component={WithAuth(ContestPage)}
          />
          <Route exact path="/account" component={WithAuth(UserProfile)} />
          <Route component={NotFound} />
        </Switch>
        <ChatContainer />
      </Router>
    );
  }
}

export default App;
