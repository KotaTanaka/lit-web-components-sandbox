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
    e.target?.classList.remove('over-bottom');

    const draggingElementId = e.dataTransfer?.getData('text/plain');
    const draggingElement = document.querySelector(`[draggable-id="${draggingElementId}"]`);
    if (!draggingElement) {
      return
    }

    if (e.offsetY < e.target.clientHeight / 2) {
      e.target.parentElement?.insertBefore<Element>(draggingElement, e.target);
    } else {
      e.target.parentElement?.insertBefore<Element>(draggingElement, e.target.nextSibling);
    }
  }

  render() {
    return html`
      <slot></slot>
      <div class="for-insert-after-last-item"></div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-drop-area': MyDropArea
  }
}
