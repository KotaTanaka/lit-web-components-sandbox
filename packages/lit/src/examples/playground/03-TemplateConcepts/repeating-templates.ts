import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-repeating-templates')
export class RepeatingTemplates extends LitElement {
  @property()
  list = ['Peas', 'Carrots', 'Tomatoes'];

  render() {
    return html`
      <p>Render a list:</p>
      <ul>
        ${this.list.map((item, index) =>
          html`
            <li>${index}: ${item}</li>
          `
        )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-repeating-templates': RepeatingTemplates
  }
}
