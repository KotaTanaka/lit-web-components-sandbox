import { LitElement, html, PropertyValues} from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { isSameDate } from './date-utils';

@customElement('my-date-display')
export class DateDisplay extends LitElement {
  @property({
    hasChanged: (value?: Date, oldValue?: Date) => {
      return !isSameDate(value, oldValue);
    }
  })
  date?: Date;

  @query('#date-field')
  dateField!: HTMLSpanElement;

  frames = [
    { backgroundColor: '#fff' },
    { backgroundColor: '#324fff' },
    { backgroundColor: '#fff' }
  ];

  render() {
    return html`
      <span id="date-field">${this.date?.toLocaleDateString()}</span>
    `;
  }

  updated(changed: PropertyValues<this>) {
    if (changed.has('date')) {
      this.dateField.animate(this.frames, 1000);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-date-display': DateDisplay
  }
}
