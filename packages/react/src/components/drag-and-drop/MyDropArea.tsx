import React from 'react';
import { createComponent } from '@lit-labs/react';
import { MyDropArea as MyDropAreaWC } from '@kotice/lit-web-components-sandbox';

export const MyDropArea = createComponent({
  tagName: 'my-drop-area',
  elementClass: MyDropAreaWC,
  react: React,
});
