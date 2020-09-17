import React from 'react';
import Header from './components/header/header.component';
import SideBar from './components/side-bar/side-bar.component';
import { AppStyles,
  AppBody} from './App.styles';

const App = () => {
  return (
    <AppStyles>
      <Header />
      <AppBody>
        <SideBar />
        {/* Sidebar Component*/}
        {/* Feed Component*/}
        {/* Widgets Component*/}
      </AppBody>
    </AppStyles>
  );
}

export default App;
