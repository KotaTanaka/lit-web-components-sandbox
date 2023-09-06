import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { tagNameMap } from '../constants';

export type Tab = {
  name: string;
  label: string;
}

@customElement(tagNameMap.MyTabContainerList)
export class MyTabContainerList extends LitElement {
  @property()
  tabs: Tab[] = [
    { name: 'tab-1', label: 'タブ1' },
    { name: 'tab-2', label: 'タブ2' },
    { name: 'tab-3', label: 'タブ3' }
  ];

  @property()
  selectedTabName: string = this.tabs[0].name

  onClickTab(tabName: string) {
    this.selectedTabName = tabName
  }

  render() {
    return html`
      <div class="container">
        <div class="tabs">
          ${this.tabs.map((tab) => {
            if (tab.name === this.selectedTabName) {
              return html`<div class="tab tab-selected">${tab.label}</div>`;
            } else {
              return html`<div class="tab" @click="${() => this.onClickTab(tab.name)}">${tab.label}</div>`;
            }
          })}
        </div>
        <div class="body">
          <slot name="${this.selectedTabName}"></slot>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      width: 320px;
    }

    .tabs {
      display: flex;
      height: 40px;
      align-items: flex-end;
      gap: 8px;
      padding: 0 8px;
      background: green;
      color: white;
      font-weight: bold;
      font-size: 14px;
    }

    .tab {
      cursor: pointer;
      padding: 4px 16px;
      border-radius: 2px 2px 0 0;
    }

    .tab-selected {
      background: white;
      color: green;
    }

    .body {
      padding: 8px;
      color: black;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    [tagNameMap.MyTabContainerList]: MyTabContainerList
  }
}
