import React from 'react';
import { createComponent } from '@lit-labs/react';
import { Basics as BasicsWC } from '@kotice/lit-web-components-sandbox';

export const Basics = createComponent({
  react: React,
  tagName: 'my-basics',
  elementClass: BasicsWC
});
