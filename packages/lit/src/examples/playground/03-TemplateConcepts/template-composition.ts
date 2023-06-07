import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-template-composition')
export class TemplateComposition extends LitElement {
  @property({ attribute: false })
  article = {
    title: 'Template composition',
    text: `Defining partial templates as instance methods
      breaks the template into manageable pieces—and
      allows a subclass to override individual parts of the template.
    `
  };

  headerTemplate() {
    return html`<header><h1>${this.article.title}</h1></header>`;
  }

  articleTemplate() {
    return html`<article>${this.article.text}</article>`;
  }

  render() {
    return html`
      ${this.headerTemplate()}
      ${this.articleTemplate()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-template-composition': TemplateComposition
  }
}
