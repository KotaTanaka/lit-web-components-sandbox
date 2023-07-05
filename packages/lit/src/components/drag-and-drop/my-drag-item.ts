import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { generateRandomId } from './utils';

@customElement('my-drag-item')
export class MyDragItem extends LitElement {
  @property()
  id = generateRandomId();

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('dragstart', this.dragStart);
    this.addEventListener('dragenter', this.dragEnter);
    this.addEventListener('dragover', this.dragOver);
    this.addEventListener('dragleave', this.dragLeave);
    this.addEventListener('dragend', this.dragEnd);

    this.setAttribute('draggable-id', this.id);
    this.setAttribute('draggable', 'true');
    this.classList.add('draggable');
  }

  dragStart(e: DragEvent) {
    if (!(e.target instanceof HTMLElement) || !e.dataTransfer) return;

    this.style.opacity = '0.4';
    e.dataTransfer.setData('text/plain', this.id);
    e.dataTransfer.effectAllowed = 'move';
  }

  dragEnter(e: DragEvent) {
    if (!(e.target instanceof HTMLElement)) return;

    e.preventDefault();
  }

  dragOver(e: DragEvent) {
    if (!(e.target instanceof HTMLElement) || !e.dataTransfer) return;

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    if (e.offsetY < e.target.clientHeight / 2) {
      e.target.classList.remove('over-bottom');
      e.target.classList.add('over');
    } else {
      e.target.classList.remove('over');
      e.target.classList.add('over-bottom');
    }

    return false;
  }

  dragLeave(e: DragEvent) {
    if (!(e.target instanceof HTMLElement)) return;

    e.stopPropagation();
    e.target.classList.remove('over');
    e.target.classList.remove('over-bottom');
  }

  dragEnd(e: DragEvent) {
    if (!(e.target instanceof HTMLElement)) return;

    this.style.opacity = '1';
    e.target.classList.remove('over');
    e.target.classList.remove('over-bottom');
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
      border-top: 2px solid black;
    }

    :host(.over-bottom) {
      border-bottom: 2px solid black;
    }

    :host(.draggable) {
      cursor: move;
      user-select: none;
    }

    .draggable-item {
      cursor: grab;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-drag-item': MyDragItem
  }
}
