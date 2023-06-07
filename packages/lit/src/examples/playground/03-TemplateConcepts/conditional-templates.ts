import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-conditional-templates')
export class ConditionalTemplates extends LitElement {
  @property()
  condition = true;

  render() {
    return html`
      <p>Render content conditionally:</p>
      ${this.condition
        ? html`
            <p>Render some HTML if condition is true.</p>
          `
        : html`
            <p>Render some other HTML if condition is false.</p>
          `}
      <button @click=${this.clickHandler}>Toggle condition</button>
    `;
  }

  clickHandler() {
    this.condition = !this.condition;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-conditional-templates': ConditionalTemplates
  }
}
