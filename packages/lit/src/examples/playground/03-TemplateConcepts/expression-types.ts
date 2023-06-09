import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-expression-types')
export class ExpressionTypes extends LitElement {
  @property()
  bodyText = 'Text in child expression.';

  @property()
  label = 'A label, for ARIA.';

  @property()
  editing = true;

  @property()
  value = 7;

  render() {
    return html`
      <div>Child expression: ${this.bodyText}</div>

      <div aria-label=${this.label}>Attribute expression.</div>

      <div>
        Boolean attribute expression.
        <input type="text" ?disabled=${!this.editing} />
      </div>

      <div>
        Property expression.
        <input type="number" .valueAsNumber=${this.value} />
      </div>

      <div>
        Event listener expression.
        <button @click="${this.clickHandler}">Click</button>
      </div>
    `;
  }

  clickHandler(e: Event) {
    this.editing = !this.editing;
    console.log(e.target);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-expression-types': ExpressionTypes
  }
}
