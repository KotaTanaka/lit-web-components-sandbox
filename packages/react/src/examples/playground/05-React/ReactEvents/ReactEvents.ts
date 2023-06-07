import React from 'react';
import { createComponent } from '@lit-labs/react';
import { ReactEvents as ReactEventsWC } from '@kotice/lit-web-components-sandbox';

export const ReactEvents = createComponent({
  react: React,
  tagName: 'my-react-events',
  elementClass: ReactEventsWC
});
