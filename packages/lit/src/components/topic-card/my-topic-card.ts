import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tagNameMap } from '../constants';

@customElement(tagNameMap.MyTopicCard)
export class MyTopicCard extends LitElement {
  @property()
  date = '2022/12/12 10:00';

  render() {
    return html`
      <div class="container">
        <div class="content">
          <div class="date">${this.date}</div>
          <slot></slot>
        </div>
        <div class="dots">
      </div>
    `;
  }

  static styles = css`
    :host {
      width: 320px;
    }

    .container {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      position: relative;
      min-height: 36px;
      padding: 4px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);
      background: #fff;
      color: #666;
      font-size: 14px;

      &:hover {
        background: #f7f7f7;
      }
    }

    .content {
      flex: 1;
      margin-right: 16px;
    }

    .date {
      margin-bottom: 4px;
      color: #222;
      font-size: 12px;
    }
    
    .dots,
    .dots::before,
    .dots::after {
      position: absolute;
      border-radius: 50%;
      width: 3px;
      height: 3px;
      background: #666;
    }
    
    .dots {
      top: 9px;
      right: 6px;
    }
    
    .dots::before {
      content: '';
      top: -5px;
    }
    
    .dots::after {
      content: '';
      top: 5px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    [tagNameMap.MyTopicCard]: MyTopicCard
  }
}
