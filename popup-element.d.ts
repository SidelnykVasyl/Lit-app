import { LitElement } from 'lit-element';
declare class PopupElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    currentStep: number;
    currentLang: string;
    static properties: {
        currentStep: {
            type: NumberConstructor;
        };
    };
    constructor();
    handleCurrentStep(event: CustomEvent): void;
    handleCurrentLang(event: CustomEvent): void;
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