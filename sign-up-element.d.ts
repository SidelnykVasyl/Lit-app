import { LitElement } from 'lit-element';
export declare class MyElement extends LitElement {
    static styles: import("lit-element").CSSResult[];
    count: number;
    password: string;
    strength: number;
    email: string;
    firstName: string;
    lastName: string;
    city: string;
    postalCode: string;
    emailFocused: boolean;
    passwordFocused: boolean;
    confirmPasswordFocused: boolean;
    hasError: boolean;
    confirmPassword: string;
    emailError: boolean;
    passwordError: boolean;
    confirmPasswordError: boolean;
    isFormValid: boolean;
    acceptExclusiveOffers: boolean;
    acceptCGV: boolean;
    acceptPrivacyPolicy: boolean;
    countryInputState: string;
    country: string;
    handleConfirmPasswordChange(event: any): void;
    handleFirstNameChange(event: any): void;
    handleLastNameChange(event: any): void;
    handleCityChange(event: any): void;
    handlePostalCodeChange(event: any): void;
    validateConfirmPassword(): void;
    validateEmail(): void;
    handleEmailChange(event: any): void;
    handleEmailFocus(): void;
    handleEmailBlur(): void;
    handlePasswordFocus(): void;
    handlePasswordBlur(): void;
    handleConfirmPasswordFocus(): void;
    handleConfirmPasswordBlur(): void;
    showPassword(): void;
    updateFormValidity(): void;
    handlePasswordChange(event: any): void;
    handleExclusiveOffersChange(event: any): void;
    handleCGVChange(event: any): void;
    handlePrivacyPolicyChange(event: any): void;
    validatePassword(): void;
    getDataFromAPI(): Promise<void>;
    calculatePasswordStrength(password: string): number;
    submitForm(): void;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sign-up-element': MyElement;
    }
}
//# sourceMappingURL=sign-up-element.d.ts.map