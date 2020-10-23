import React from 'react';
import SideBarRow from './side-bar-row.component';
import { SideBarStyles } from './side-bar.styles';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import { connect } from 'react-redux';

const SideBar = ({ currentUser }) => {
  const { displayName, photoURL } = currentUser;
  return (
    <SideBarStyles>
      <SideBarRow src={photoURL} title={displayName} />
      <SideBarRow
        Icon={LocalHospitalIcon}
        title='COVID-19 Information Center'
      />
      <SideBarRow Icon={EmojiFlagsIcon} title='Pages' />
      <SideBarRow Icon={PeopleIcon} title='Friends' />
      <SideBarRow Icon={ChatIcon} title='Messenger' />
      <SideBarRow Icon={StorefrontIcon} title='MarketPlace' />
      <SideBarRow Icon={VideoLibraryIcon} title='Videos' />
      <SideBarRow Icon={ExpandMoreOutlinedIcon} title='Marketplace' />
    </SideBarStyles>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(SideBar);
