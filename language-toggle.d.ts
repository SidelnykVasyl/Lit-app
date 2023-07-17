import { LitElement } from 'lit-element';
export declare class LanguageToggle extends LitElement {
    selectedLanguage: string;
    currentLocale: string;
    static styles: import("lit-element").CSSResult;
    constructor();
    connectedCallback(): void;
    switchLocale(): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'language-toggle': LanguageToggle;
    }
}
//# sourceMappingURL=language-toggle.d.ts.map