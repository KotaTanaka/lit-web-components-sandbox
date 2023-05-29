import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-attribute-converter')
class CustomAttributeConverter extends LitElement {
  @property({
    converter: (attrValue: string | null) => {
      if (attrValue)
        return new Date(attrValue);
      else
        return undefined;
    }
  })
  date?: Date;

  render() {
    return html`
      ${this.date
        ? html`
            <p>Date is
              <span id="date-field">${this.date.toLocaleDateString()}</span>
            </p>
          `
        : 'No date set'
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'custom-attribute-converter': CustomAttributeConverter
  }
}
