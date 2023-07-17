import { LitElement } from 'lit-element';
export declare class LoginElement extends LitElement {
    currentLocale: string;
    static styles: import("lit-element").CSSResult[];
    name: string;
    users: Array<any>;
    count: number;
    email: string;
    password: string;
    showError: boolean;
    onEmailChange(e: any): void;
    onPasswordChange(e: any): void;
    connectedCallback(): void;
    login(): Promise<void>;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'login-element': LoginElement;
    }
}
//# sourceMappingURL=login-element.d.ts.map