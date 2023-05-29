import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('class-map-directive')
export class ClassMapDirective extends LitElement {
  @property({ type: Boolean })
  enabled = true;

  @property({ type: Boolean })
  hidden = false;

  render() {
    const classes = {
      enabled: this.enabled,
      hidden: this.hidden,
      padded: true
    };
    return html`
      <h3>classMap directive example</h3>
      <div class=${classMap(classes)}>Classy text</div>
      <hr>
      <label>
        <input type="checkbox" .checked=${this.enabled} @change=${this.toggleEnabled}>
        Enabled
      </label>
      <label>
        <input type="checkbox" .checked=${this.hidden} @change=${this.toggleHidden}>
        Hidden
      </label>
    `;
  }

  private toggleEnabled() {
    this.enabled = !this.enabled;
  }

  private toggleHidden() {
    this.hidden = !this.hidden;
  }

  static styles = css`
    .enabled {
      background: lightgreen;
    }
    .hidden {
      opacity: 0.2;
    }
    .padded {
      padding: 10px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'class-map-directive': ClassMapDirective
  }
}
