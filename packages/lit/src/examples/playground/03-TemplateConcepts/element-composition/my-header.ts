import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-header')
export class MyHeader extends LitElement {
  render() {
    return html`
      <header>
        <h1>Element composition</h1>
      </header>
    `;
  }

  static styles = css`
    h1 {
      font-family: Manrope, sans-serif;
      text-align: center;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-header': MyHeader
  }
}