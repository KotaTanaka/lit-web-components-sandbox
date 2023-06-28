import React from 'react';
import { createComponent } from '@lit-labs/react';
import { MyDraggableArea as MyDraggableAreaWC } from '@kotice/lit-web-components-sandbox';

export const MyDraggableArea = createComponent({
  tagName: 'my-draggable-area',
  elementClass: MyDraggableAreaWC,
  react: React,
});
