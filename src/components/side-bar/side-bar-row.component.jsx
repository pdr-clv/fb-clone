import React from 'react';
import { SideBarRowStyles } from './side-bar.styles';
import { Avatar } from '@material-ui/core';


const SideBarRow = ({ src, Icon, title }) => {
  return (
    <SideBarRowStyles>
      {src && <Avatar src={src}/>}
      {Icon && <Icon/>}
      <h4>{ title }</h4>
    </SideBarRowStyles>
  )
}

export default SideBarRow;
