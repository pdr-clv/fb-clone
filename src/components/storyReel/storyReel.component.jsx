import React from 'react';
import StoryReelItem from './storyReelItem';
import { StoryReelStyles, Container, StoryReelItemContainer } from './storyReel.styles';
import StoryReelData from '../../datajson-components/storyreel.data';

const StoryReel = () => {
  return (
    <StoryReelStyles>
      <Container>
      {StoryReelData.map((element,key) => 
        <StoryReelItemContainer key={key}>
          <StoryReelItem
            key = {key}
            srcProfile = {element.srcProfile}
            image = {element.image}
            title = {element.title}
          />
        </StoryReelItemContainer>
        )
      }
      </Container>
    </StoryReelStyles>
  )
}

export default StoryReel;
