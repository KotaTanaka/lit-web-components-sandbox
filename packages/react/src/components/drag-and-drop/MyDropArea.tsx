import React from 'react';
import { createComponent } from '@lit-labs/react';
import { MyDropArea as MyDropAreaWC, tagNameMap } from '@kotice/lit-web-components-sandbox';

export const MyDropArea = createComponent({
  tagName: tagNameMap.MyDropArea,
  elementClass: MyDropAreaWC,
  react: React,
});
