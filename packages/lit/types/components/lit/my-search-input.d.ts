import { LitElement } from 'lit';
export declare class MySearchInput extends LitElement {
    placeholder: string;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-search-input': MySearchInput;
    }
}
