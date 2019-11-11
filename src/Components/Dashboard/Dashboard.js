// Packages
import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';

// Redux Reducers
import {clearUser} from './../../redux/reducers/userReducer';

// Child Components
import Chat from './Components/Chat/Chat';
import People from './Components/People/People';
import Settings from './Components/Settings/Settings';
import NavBar from './Components/NavBar/NavBar';

// Styled Components
import {
  Container
} from './DashboardStyles'

// Dashboard Component
const Dashboard = (props) => {
  // Connecting to redux state
  const reduxState = useSelector(state => (state))
  const dispatch = useDispatch();

  // Destructuring reduxState
  const {user} = reduxState.userReducer;

  // Checks if user is logged in (will update in future)
  if (!user.id) {
    return <Redirect to="/login" />
  }

  // Removes user data from Redux, destroys session, and redirects to landing page
  const handleUserLogout = () => {
    axios.get('/auth/logout')
      .then((res) => {
        dispatch(clearUser());
        props.history.push('/');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <Container>
      <NavBar logout={handleUserLogout} />
      <Switch>
        <Route path='/dashboard/chat' component={Chat} />
        <Route path='/dashboard/people' component={People} />
        <Route path='/dashboard/settings' component={Settings} />
      </Switch>
    </Container>
  )
}

export default Dashboard;