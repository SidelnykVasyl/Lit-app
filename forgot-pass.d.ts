import { LitElement } from 'lit-element';
export declare class MyElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    count: number;
    getDataFromAPI(): Promise<void>;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'forgot-pass-element': MyElement;
    }
}
//# sourceMappingURL=forgot-pass.d.ts.map