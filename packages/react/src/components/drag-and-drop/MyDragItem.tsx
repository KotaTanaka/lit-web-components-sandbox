import React from 'react';
import { createComponent } from '@lit-labs/react';
import { MyDragItem as MyDragItemWC, tagNameMap } from '@kotice/lit-web-components-sandbox';

export const MyDragItem = createComponent({
  tagName: tagNameMap.MyDragItem,
  elementClass: MyDragItemWC,
  react: React,
});
