import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-article')
export class MyArticle extends LitElement {
  render() {
    return html`
      <article>
        <p>
          Manage complexity by building large, complex components
          out of smaller, simpler components that do one thing well.
        </p>
      </article>
    `;
  }

  static styles =
    css`
      article {
        padding: 8px;
        text-align: center;
        font-family: 'Open Sans', sans-serif;
      }
    `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-article': MyArticle
  }
}