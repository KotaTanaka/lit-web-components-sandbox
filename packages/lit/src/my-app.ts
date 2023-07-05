import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-app')
export class MyApp extends LitElement {
  render() {
    return html`
      <h1>@kotice/lit-web-components-sandbox</h1>
      <h2 class="heading">🌏 Components</h2>
      <a href="examples.html">Examples</a>
      <slot></slot>
    `;
  }

  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }

    .heading {
      margin: 16px 0;
      line-height: 2.5;
      border-bottom: thin solid #ccc;
    }

    body {
      margin: 0;
    }
    
    h1, h2, p {
      margin: 0;
    }

    a {
      color: #fff;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-app': MyApp
  }
}
