import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-footer')
export class MyFooter extends LitElement {
  render() {
    return html`
      <footer><p>THE END</p></footer>
    `;
  }

  static styles = css`
    footer {
      display: flex;
      justify-content: center;
      font-family: Manrope, sans-serif;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-footer': MyFooter
  }
}
