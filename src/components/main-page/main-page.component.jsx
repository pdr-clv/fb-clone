import React from 'react';

import Header from '../header/header.component';
import SideBar from '../side-bar/side-bar.component';
import Feed from '../feed/feedBody.component';
import Widgets from '../widgets/widgets.component';

import { MainPageBody } from './main-page.styles';

const MainPage = () => {
  return (
    <div>
      <Header />
      <MainPageBody>
        <SideBar />
        <Feed />
        <Widgets />
      </MainPageBody>
    </div>
  );
};

export default MainPage;
