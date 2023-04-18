import { LitElement } from 'lit';
export declare class MyElement extends LitElement {
    docsHint: string;
    count: number;
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}
