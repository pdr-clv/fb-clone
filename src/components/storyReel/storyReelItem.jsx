import React from 'react';
import { AvatarPic, StoryReelItemStyles } from './storyReel.styles';

const StoryReelItem = ( {image, srcProfile, title} ) => {
  return (
    <StoryReelItemStyles style= {{backgroundImage: `url(${image})`}}>
      <AvatarPic src={srcProfile} />
      <h4>{title}</h4>
    </StoryReelItemStyles>
  )
}

export default StoryReelItem;