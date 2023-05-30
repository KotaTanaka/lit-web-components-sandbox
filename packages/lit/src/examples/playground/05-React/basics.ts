import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('basics')
export class Basics extends LitElement {
  @property() name = 'Somebody';

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
      <p>Checkout our <a href="https://lit.dev/docs/frameworks/react/" target="_blank" rel="noopener noreferrer">React framework docs</a>!</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'basics': Basics
  }
}
