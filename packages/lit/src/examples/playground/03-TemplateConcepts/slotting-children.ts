import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-slotting-children')
export class SlottingChildren extends LitElement {
  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }

  static styles = css`
    ::slotted(*) {
      border: 1px solid blue;
      padding: 6px;
    }
  `;
}


declare global {
  interface HTMLElementTagNameMap {
    'my-slotting-children': SlottingChildren
  }
}
