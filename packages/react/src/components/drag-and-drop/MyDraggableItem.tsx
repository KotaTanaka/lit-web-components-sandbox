import React from 'react';
import { createComponent } from '@lit-labs/react';
import { MyDraggableItem as MyDraggableItemWC } from '@kotice/lit-web-components-sandbox';

export const MyDraggableItem = createComponent({
  tagName: 'my-draggable-item',
  elementClass: MyDraggableItemWC,
  react: React,
});
