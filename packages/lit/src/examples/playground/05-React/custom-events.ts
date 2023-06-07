import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

const messages: string[] = [
  "everything is going to be okay!",
  "you're amazing!",
  "when you ask for help, everyone wins!",
  "there is always sunshine somewhere!",
];

function randomBucket<T>(messages: T[]): T {
  const last = messages.length - 1;
  const prev = messages[last];
  const target = Math.floor(Math.random() * (messages.length - 1));
  messages[last] = messages[target];
  messages[target] = prev;

  return messages[last];
}

@customElement('my-custom-events')
export class CustomEvents extends LitElement {
  render() {
    return html`
      <button @click="${this.onClick}">dispatch secret message event</button>
    `;
  }

  onClick = () => {
    this.dispatchEvent(
      new CustomEvent(
        'secret-message',
        { detail: randomBucket(messages) },
      ),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-custom-events': CustomEvents
  }
}
