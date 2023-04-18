import { LitElement } from 'lit';
export declare class MyTextInput extends LitElement {
    private _text;
    render(): import("lit-html").TemplateResult<1>;
    input: HTMLInputElement;
    submitText(): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-clock': MyTextInput;
    }
}
