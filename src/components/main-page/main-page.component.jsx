import React from 'react';

import Header from '../header/header.component';
import SideBar from '../side-bar/side-bar.component';
import Feed from '../feed/feedBody.component';
import Widgets from '../widgets/widgets.component';

import { MainPageBody } from './main-page.styles';

const MainPage = ({ userId, displayName, photoURL }) => {
  return (
    <div>
      <Header displayName={displayName} photoURL={photoURL} />
      <MainPageBody>
        <SideBar displayName={displayName} photoURL={photoURL} />
        <Feed userId={userId} photoURL={photoURL} displayName={displayName} />
        <Widgets />
      </MainPageBody>
    </div>
  );
};

export default MainPage;
