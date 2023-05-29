import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('basic-properties')
class BasicProperties extends LitElement {
  @property()
  name?: string;

  render() {
    return html`
      Hello I'm ${this.name}.
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'basic-properties': BasicProperties
  }
}
