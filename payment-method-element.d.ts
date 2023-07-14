/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
import { LitElement } from 'lit-element';
interface Payment {
    title: string;
    price: number;
    selected: boolean;
    discount: string;
    choose: string;
}
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyElement extends LitElement {
    static styles: import("lit-element").CSSResult[];
    selectedItemIndex: number;
    payments: Payment[];
    count: number;
    isButtonEnabled: boolean;
    constructor();
    connectedCallback(): void;
    getDataFromAPI(): Promise<void>;
    handleSelectItem(index: number): void;
    handleClick(): void;
    disconnectedCallback(): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'payment-method-element': MyElement;
    }
}
export {};
//# sourceMappingURL=payment-method-element.d.ts.map