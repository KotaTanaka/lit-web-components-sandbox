import { LitElement, css, html } from 'lit'
import { customElement, query, state } from 'lit/decorators.js'

@customElement('my-text-input')
export class MyTextInput extends LitElement {
  @state()
  private _text = '';

  render() {
    return html`
      <div class="wrapper">
        <input id="new-text">
        <button @click=${this.submitText}>決定！</button>
      </div>
      <p class="text">${this._text}</p>
    `
  }

  @query('#new-text')
  input!: HTMLInputElement;

  submitText() {
    this._text = this.input.value;
    this.input.value = '';
  }

  static styles = css`
    :host {
      max-width: 640px;
    }

    input {
      height: 24px;
      min-width: 240px;
      padding: 0 8px;
      background: #fff;
      border: 1px solid #000;
      border-radius: 8px;
      color: #000;
      font-size: 14px;
    }

    button {
      height: 24px;
      min-width: 64px;
      background: #000;
      border: none;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;

      &:hover {
        cursor: pointer;
      }
    }

    p {
      margin: 0;
    }
    
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

    .text {
      color: #000;
      margin-top: 8px;
      font-size: 20px;
      font-weight: 600;
      text-shadow: #fff 1px 0 5px;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-clock': MyTextInput
  }
}
