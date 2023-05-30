import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('my-search-input')
export class MySearchInput extends LitElement {
  @property()
  placeholder = '入力してください';

  render() {
    return html`
      <input class="search" type="search" placeholder="${this.placeholder}">
      <input class="submit" type="submit" value="検索">
    `
  }

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

    .search {
      height: 24px;
      min-width: 240px;
      padding: 0 8px;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 2px;
      color: #000;
      font-size: 12px;
    }

    .submit {
      height: 24px;
      min-width: 64px;
      background: #000;
      border: #000;
      border-radius: 2px;
      color: #fff;
      font-size: 12px;
      font-weight: 600;

      &:hover {
        cursor: pointer;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-search-input': MySearchInput
  }
}