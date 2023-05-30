import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('react-events')
export class ReactEvents extends LitElement {
  @property({ type: Number }) count = 0;

  render() {
    return html`
      <button>click count: ${this.count}</button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'react-events': ReactEvents
  }
}
