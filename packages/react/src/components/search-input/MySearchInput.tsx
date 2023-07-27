import React from 'react';
import { createComponent } from '@lit-labs/react';
import { MySearchInput as MySearchInputWC, tagNameMap } from '@kotice/lit-web-components-sandbox';

export const MySearchInput = createComponent({
  tagName: tagNameMap.MySearchInput,
  elementClass: MySearchInputWC,
  react: React,
});
