import React from 'react';
import { EventName, createComponent } from '@lit-labs/react';
import { CustomEvents as CustomEventsWC } from '@kotice/lit-web-components-sandbox';

export const CustomEvents = createComponent({
  react: React,
  tagName: 'react-events',
  elementClass: CustomEventsWC,
  events: { onSecretMessage: 'secret-message' as EventName<CustomEvent<string>> }
});
