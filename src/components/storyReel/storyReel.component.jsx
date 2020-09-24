import React from 'react';
import StoryReelItem from './storyReelItem';
import { StoryReelStyles } from './storyReel.styles';
import StoryReelData from '../../datajson-components/storyreel.data';

const StoryReel = () => {
  return (
    <StoryReelStyles>
      {StoryReelData.map((element,key) => 
        <StoryReelItem
          key = {key}
          srcProfile = {element.srcProfile}
          image = {element.image}
          title = {element.title}
        />)
      }
    </StoryReelStyles>
  )
}

export default StoryReel;
