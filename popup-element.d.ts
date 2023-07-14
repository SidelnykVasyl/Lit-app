import { LitElement } from 'lit-element';
declare class PopupElement extends LitElement {
    currentStep: number;
    static styles: import("lit-element").CSSResult;
    static properties: {
        currentStep: {
            type: NumberConstructor;
        };
    };
    constructor();
    handleChildData(event: CustomEvent): void;
    render(): import("lit-element").TemplateResult;
    previousStep(): void;
    nextStep(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'popup-element': PopupElement;
    }
}
export {};
//# sourceMappingURL=popup-element.d.ts.map