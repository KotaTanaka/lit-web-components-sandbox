import React from 'react';
import { createComponent } from '@lit-labs/react';
import { Slots as SlotsWC } from '@kotice/lit-web-components-sandbox';

export const Slots = createComponent({
  react: React,
  tagName: 'my-slots',
  elementClass: SlotsWC
});
