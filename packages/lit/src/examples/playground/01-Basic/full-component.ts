import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-full-component')
export class FullComponent extends LitElement {
  @property()
  greeting = 'Hello';

  @property()
  planet = 'World';

  render() {
    return html`
      <span @click=${this.togglePlanet}>
        ${this.greeting}
        <span class="planet">${this.planet}</span>
      </span>
    `;
  }

  togglePlanet() {
    this.planet = this.planet === "World" ? "Mars" : "World";
  }

  static styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      background: lightgray;
    }

    .planet {
      color: var(--planet-color, blue);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-full-component': FullComponent
  }
}
