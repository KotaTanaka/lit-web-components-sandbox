import React from 'react';
import { createComponent } from '@lit-labs/react';
import { MyDragItem as MyDragItemWC } from '@kotice/lit-web-components-sandbox';

export const MyDragItem = createComponent({
  tagName: 'my-drag-item',
  elementClass: MyDragItemWC,
  react: React,
});
