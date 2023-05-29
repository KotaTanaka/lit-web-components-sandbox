import { LitElement, html, css  } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ref, createRef, Ref } from 'lit/directives/ref.js';

const loremIpsum = Array(100).fill(0).map(() => 'Lorem ipsum dolor sit amet.').join(' ');

@customElement('ref-directive')
export class RefDirective extends LitElement {
  inputRef: Ref<HTMLInputElement> = createRef<HTMLInputElement>();

  render() {
    return html`
      Passing ref directive a Ref object that will hold the element in .value:<br>
      <input ${ref(this.inputRef)}>
      <hr>
      Passing ref directive a change callback
      <div class="scroll">
        ${loremIpsum}
        <p ${ref(this.ensureInView)}>Scrolled into view!</p>
        ${loremIpsum}
      </div>
    `;
  }

  firstUpdated() {
    const input = this.inputRef.value!;
    input.focus();
  }

  ensureInView(element: Element | undefined) {
    requestAnimationFrame(() => element!.scrollIntoView(true));
  }

  static styles = css`
    .scroll {
      height: 100px;
      overflow: auto;
      padding: 10px;
      border: 1px solid gray;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'ref-directive': RefDirective
  }
}
