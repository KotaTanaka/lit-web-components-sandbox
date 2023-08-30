import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tagNameMap } from '../constants';

@customElement(tagNameMap.MyStackListItem)
export class MyStackListItem extends LitElement {
  render() {
    return html`
      <div class="container">
        <div class="content">
          <slot></slot>
        </div>
        <div class="chevron-right" />
      </div>
    `;
  }

  static styles = css`
    :host {
      width: 100%;
    }

    .container {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 36px;
      padding: 8px;
      border-top: 1px solid #ccc;
      background: #fff;
      color: #666;
      font-size: 14px;
      overflow: hidden;

      &:hover {
        background: #f7f7f7;
      }
    }

    .content {
      flex: 1;
      margin-right: 16px;
    }

    .chevron-right {
      display: inline-block;
      width: 8px;
      height: 8px;
      border: 2px solid currentColor;
      border-left: 0;
      border-bottom: 0;
      box-sizing: border-box;
      transform: translateX(-25%) rotate(45deg);
      color: #666;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    [tagNameMap.MyStackListItem]: MyStackListItem
  }
}
