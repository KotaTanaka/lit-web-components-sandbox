import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { generateRandomId } from './utils';

@customElement('my-draggable-item')
export class MyDraggableItem extends LitElement {
  id = generateRandomId();

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('dragstart', this.dragStart);
    this.addEventListener('dragenter', this.dragEnter);
    this.addEventListener('dragover', this.dragOver);
    this.addEventListener('dragleave', this.dragLeave);
    this.addEventListener('dragend', this.dragEnd);

    this.setAttribute('draggable-id', this.id);
    this.classList.add('draggable');
    this.setAttribute('draggable', 'true');
  }

  dragStart(e: DragEvent) {
    if (!(e.target instanceof HTMLElement) || !e.dataTransfer) return;

    this.style.opacity = '0.4';
    e.dataTransfer.setData('text/plain', this.id);
    e.dataTransfer.effectAllowed = 'move';
    e.target.classList.add('over');
  }

  dragEnter(e: DragEvent) {
    if (!(e.target instanceof HTMLElement)) return;

    e.preventDefault();
    e.target.classList.add('over');
  }

  dragOver(e: DragEvent) {
    if (!(e.target instanceof HTMLElement) || !e.dataTransfer) return;

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  dragLeave(e: DragEvent) {
    if (!(e.target instanceof HTMLElement)) return;

    e.stopPropagation();
    e.target.classList.remove('over');
  }

  dragEnd(e: DragEvent) {
    if (!(e.target instanceof HTMLElement)) return;

    this.style.opacity = '1';
    e.target.classList.remove('over');
  }

  render() {
    return html`
      <div class="draggable-item">
        <slot></slot>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      width: fit-content;
    }

    :host(.over) {
      border-top: 2px solid white;
    }

    :host(.draggable) {
      cursor: move;
      user-select: none;
    }

    .draggable-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      width: 240px;
      height: 48px;
      padding: 8px 16px;
      border-radius: 6px;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-draggable-item': MyDraggableItem
  }
}
