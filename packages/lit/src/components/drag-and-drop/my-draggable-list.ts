import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-draggable-list')
export class MyDraggableList extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('drop', this.drop);
  }

  drop (e: DragEvent) {
    if (!(e.target instanceof HTMLElement)) return;
  
    e.target?.classList.remove('over');
    const draggingElementId = e.dataTransfer?.getData('text/plain');
    const draggingElement = this.querySelector(`[draggable-id="${draggingElementId}"]`);

    if (draggingElement) {
      e.target.parentElement?.insertBefore<Element>(draggingElement, e.target);
    }
  }

  render() {
    return html`<slot></slot>`;
  }

  static styles = css``;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-draggable-list': MyDraggableList
  }
}
