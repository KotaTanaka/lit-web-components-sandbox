import React from 'react';
import { createComponent } from '@lit-labs/react';
import { MySearchInput as MySearchInputWC } from '@kotice/lit-web-components-sandbox';

export const MySearchInput = createComponent({
  tagName: 'my-search-input',
  elementClass: MySearchInputWC,
  react: React,
});
