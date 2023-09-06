import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tagNameMap } from '../constants';

@customElement(tagNameMap.MyTabContainerItem)
export class MyTabContainerItem extends LitElement {
  render() {
    return html`
      <div class="container">
        <slot></slot>
      </div>
    `;
  }

  static styles = css`
    :host {
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    [tagNameMap.MyTabContainerItem]: MyTabContainerItem
  }
}
