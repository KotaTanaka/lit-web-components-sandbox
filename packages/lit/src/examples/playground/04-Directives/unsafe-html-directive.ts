import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const markup = '<h3>Some HTML to render.</h3>';

@customElement('unsafe-html-directive')
class UnsafeHTMLDirective extends LitElement {

  render() {
    return html`
      <h3>unsafeHTML directive example</h3>
      Look out, potentially unsafe HTML ahead:
      ${unsafeHTML(markup)}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'unsafe-html-directive': UnsafeHTMLDirective
  }
}
