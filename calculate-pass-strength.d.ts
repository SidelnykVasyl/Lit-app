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
        'calculate-pass-strength': MyElement;
    }
}
//# sourceMappingURL=calculate-pass-strength.d.ts.map