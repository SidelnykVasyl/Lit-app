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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map.js';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.enabled = false;
        this.classes = { someclass: true, anotherclass: true };
        this.isOpen = false;
    }
    connectedCallback() {
        super.connectedCallback();
        setTimeout(() => {
            this._openPopup();
        }, 500);
    }
    render() {
        const styles = { display: this.isOpen ? 'none' : 'block' };
        return html `
      <button style=${styleMap(styles)} @click=${this._openPopup} part="button">
        Open Pop-up
      </button>
    `;
    }
    _openPopup() {
        const popupComponent = document.querySelector('popup-element');
        if (popupComponent) {
            popupComponent.style.display = 'block';
        }
        this.isOpen = !this.isOpen;
    }
};
MyElement.styles = css `
    button {
      border: none;
      padding: 10px 15px;
      border-radius: 10px;
      display: block;
      margin: 30px auto;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.5;
    }
  `;
__decorate([
    property({ type: Boolean })
], MyElement.prototype, "enabled", void 0);
__decorate([
    property({ type: Boolean })
], MyElement.prototype, "isOpen", void 0);
MyElement = __decorate([
    customElement('open-btn-element')
], MyElement);
export { MyElement };
//# sourceMappingURL=open-btn-element.js.map