import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-hello-world')
export class HelloWorld extends LitElement {
  @property()
  name = 'kotice';

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }

  static styles = css`
    p {
      color: blue;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-hello-world': HelloWorld
  }
}
