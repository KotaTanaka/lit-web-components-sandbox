import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-drop-area')
export class MyDropArea extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('drop', this.drop);
  }

  drop (e: DragEvent) {
    if (!(e.target instanceof HTMLElement)) return;
  
    e.target?.classList.remove('over');
    const draggingElementId = e.dataTransfer?.getData('text/plain');
    const draggingElement = document.querySelector(`[draggable-id="${draggingElementId}"]`);

    if (draggingElement) {
      e.target.parentElement?.insertBefore<Element>(draggingElement, e.target);
    }
  }

  render() {
    return html`<slot></slot>`;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 8px;
      color: black;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-drop-area': MyDropArea
  }
}
