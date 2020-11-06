import React from 'react';

import { WidgetsStyles } from './widgets.styles';

const Widgets = () => {
  return (
    <WidgetsStyles>
      <iframe 
        title= 'fbIframe' 
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebookapp&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
        />
    </WidgetsStyles>
      
  )
}

export default Widgets;
