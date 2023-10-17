import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tagNameMap } from '../constants';

type SelectItem = {
  value: string | number;
  label: string;
}

@customElement(tagNameMap.MyDropdownSelect)
export class MyDropdownSelect extends LitElement {
  @property({ type: String })
  placeholder = '項目を選択...';

  @property({ type: String })
  value: SelectItem['value'] = '';

  @property({ type: Array })
  items: SelectItem[] = [];

  @property({ attribute: false })
  isOpen = false;

  connectedCallback() {
    super.connectedCallback();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onClickItem(value: SelectItem['value']) {
    this.value = value;
    this.isOpen = false;
  }

  render() {
    return html`
      <div class="${this.isOpen ? 'select select-opened' : 'select'}" @click="${this.toggle}">
        ${this.items.find((item) => item.value === this.value)?.label ?? html`<span class="placeholder">${this.placeholder}</span>`}
        <div class="${this.isOpen ? 'triangle-opened' : 'triangle'}"></div>
      </div>
      ${this.isOpen ? html`
        <div class="menu">
          ${this.items.map((item) => {
            return html`
              <div
                class="${item.value === this.value ? 'menu-item menu-item-selected' : 'menu-item'}"
                @click="${() => this.onClickItem(item.value)}"
              >
                ${item.label}
              </div>
            `;
          })}
        </div>
      ` : ''}
    `;
  }

  static styles = css`
    :host {
      position: relative;
    }

    .select {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 24px;
      min-width: 240px;
      padding: 0 8px;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 2px;
      box-sizing: border-box;
      color: #000;
      font-size: 12px;

      &:hover {
        background: #f7f7f7;
      }
    }

    .select-opened {
      background: #f7f7f7;
    }

    .triangle {
      border-top: 4px solid #777;
      border-right: 3px solid transparent;
      border-left: 3px solid transparent;
    }

    .triangle-opened {
      border-right: 3px solid transparent;
      border-bottom: 4px solid #777;
      border-left: 3px solid transparent;
    }

    .placeholder {
      color: #ccc;
    }

    .menu {
      position: absolute;
      top: 28px;
      left: 0;
      width: 100%;
      padding-bottom: 4px;
      background: #fff;
    }

    .menu-item {
      cursor: pointer;
      padding: 4px 8px;
      color: #000;
      font-size: 12px;

      &:hover {
        background: #eee;
      }
    }

    .menu-item-selected {
      background: #eee;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    [tagNameMap.MyDropdownSelect]: MyDropdownSelect
  }
}
