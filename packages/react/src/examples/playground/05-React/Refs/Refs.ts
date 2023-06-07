import React from 'react';
import { createComponent } from '@lit-labs/react';
import { Refs as RefsWC } from '@kotice/lit-web-components-sandbox';

export const Refs = createComponent({
  react: React,
  tagName: 'my-refs',
  elementClass: RefsWC,
  events: { onPlayingChange: 'playing-change' },
});
