import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tagNameMap } from '../constants';

@customElement(tagNameMap.MyStackList)
export class MyStackList extends LitElement {
  render() {
    return html`
      <div class="container">
        <slot></slot>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: 320px;
    }

    .container {
      border-bottom: 1px solid #ccc;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    [tagNameMap.MyStackList]: MyStackList
  }
}
