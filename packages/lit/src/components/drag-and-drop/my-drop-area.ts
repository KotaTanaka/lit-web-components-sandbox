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

    e.target.classList.remove('over');
    e.target.classList.remove('over-bottom');

    const draggingElementId = e.dataTransfer?.getData('text/plain');
    const draggingElement = document.querySelector(`[draggable-id="${draggingElementId}"]`);
    if (!draggingElement) {
      return
    }

    const isDraggedBottom = e.offsetY < e.target.clientHeight / 2;

    if (e.target.parentElement === draggingElement.parentElement) {
      // 同じエリア内でのD&Dの場合は順番の入れ替え
      e.target.parentElement?.insertBefore(draggingElement, isDraggedBottom ? e.target : e.target.nextSibling);
    } else {
      // 別のエリアにDropする場合は既存の要素を元に新規作成する
      const newElement = e.target.cloneNode(true);
      newElement.textContent = draggingElement.textContent;
      draggingElement.remove();
      e.target.parentElement?.insertBefore(newElement, isDraggedBottom ? e.target : e.target.nextSibling);
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
