import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import {
  HeaderStyles,
  HeaderLeft,
  HeaderMiddle,
  HeaderRight,
  HeaderInput,
  IconMiddle,
  HeaderInfo,
  IconButtonSignOut,
  IconButtons
} from './header.styles';

const Header = ({ currentUser }) => {
  //currentUser is coming from mapStateToProps from redux. It is comming an object with { currentUser, dispatch } this is why we have to add {currentUser}
  const { displayName, photoURL } = currentUser;
  return (
    <HeaderStyles>
      <HeaderLeft>
        <img
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png'
          }
          alt=''
        />
        <HeaderInput>
          <SearchIcon />
          <input type='text' placeholder='Search Facebook' />
        </HeaderInput>
      </HeaderLeft>
      <HeaderMiddle>
        <IconMiddle className='active'>
          <HomeIcon fontSize='large' />
        </IconMiddle>
        <IconMiddle>
          <FlagIcon fontSize='large' />
        </IconMiddle>
        <IconMiddle>
          <SubscriptionsOutlinedIcon fontSize='large' />
        </IconMiddle>
        <IconMiddle>
          <StorefrontOutlinedIcon fontSize='large' />
        </IconMiddle>
        <IconMiddle>
          <SupervisedUserCircleIcon fontSize='large' />
        </IconMiddle>
      </HeaderMiddle>
      <HeaderRight>
        <HeaderInfo>
          <Avatar src={photoURL} />
          <h4>{displayName}</h4>
        </HeaderInfo>
        <IconButtonSignOut onClick={() => auth.signOut()}>
          <ExitToAppIcon alt='Sign Out' />
          <span className='sign-out-text'>Sign Out</span>
        </IconButtonSignOut>
        <IconButtons>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </IconButtons>
      </HeaderRight>
    </HeaderStyles>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
