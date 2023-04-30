import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import litLogo from './assets/lit.svg';
import viteLogo from '/vite.svg';

@customElement('my-app')
export class MyApp extends LitElement {
  render() {
    return html`
      <h1>@kotice/lit-web-components-sandbox</h1>
      <div class="logo-list">
        <a href="https://vitejs.dev" target="_blank">
          <img src=${viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <h2 class="heading">🌏 Components</h2>
      <slot></slot>
    `
  }

  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
    
    .logo-list {
      margin: 8px 0;
    }
    
    .logo {
      height: 24px;
      padding: 8px;
      will-change: filter;
      transition: filter 300ms;
    }

    .logo:hover {
      filter: drop-shadow(0 0 8px #646cffaa);
    }

    .logo.lit:hover {
      filter: drop-shadow(0 0 8px #325cffaa);
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
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-app': MyApp
  }
}
