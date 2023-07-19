var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
    }
    async getDataFromAPI() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            console.log(data);
            // Handle the API response
        }
        catch (error) {
            console.error(error);
            // Handle error
        }
    }
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return html `

<div>
            <div class="indicator ${this.strength >= 1 ? 'bg-red' : ''}"></div>
            <div
              class="indicator ${this.strength >= 2 ? 'bg-red' : ''}"
            ></div>
            <div
              class="indicator ${this.strength >= 3 ? 'bg-red' : ''}"
            ></div>
            <div
              class="indicator ${this.strength >= 4 ? 'bg-red' : ''}"
            ></div>
            <div
              class="indicator ${this.strength >= 5 ? 'bg-red' : ''}"
            ></div>
            <div
              class="indicator ${this.strength >= 6 ? 'bg-red' : ''}"
            ></div>
            <div class="indicator"></div>
          </div>
    `;
    }
};
MyElement.styles = css `
  `;
__decorate([
    property({ type: Number })
], MyElement.prototype, "count", void 0);
MyElement = __decorate([
    customElement('calculate-pass-strength')
], MyElement);
export { MyElement };
//# sourceMappingURL=calculate-pass-strength.js.map