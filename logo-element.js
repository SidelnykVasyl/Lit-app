var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css } from 'lit-element';
let LoginElement = class LoginElement extends LitElement {
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return html `
        <img src="/assets/logo.svg" alt="#" />
        <h2 class="title">
            <slot></slot>
        </h2>
    `;
    }
};
LoginElement.styles = css `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Raleway', sans-serif;
    }
    img {
        display: block;
        margin: 0 auto;
    }
    .title {
        text-align: center;
        margin-top: 13px;
        font-size: 31px;
    }
  `;
LoginElement = __decorate([
    customElement('logo-element')
], LoginElement);
export { LoginElement };
//# sourceMappingURL=logo-element.js.map