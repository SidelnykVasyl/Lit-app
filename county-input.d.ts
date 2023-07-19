import { LitElement } from 'lit-element';
export declare class MyElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    state: string;
    country: string;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'country-input': MyElement;
    }
}
//# sourceMappingURL=county-input.d.ts.map