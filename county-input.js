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
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return html `
      <div class="wrapper">
        <p>
          Pas de soucis, indiquez votre email et nous vous enverrons un lien
          vous permettant de ressaisir votre mot de passe.
        </p>
        <div class="address">
        <label>Votre adresse email</label>
        <input type="email" />
        <button>
          Envoyer
        </button>
        </div>
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
    customElement('country-input')
], MyElement);
export { MyElement };
//# sourceMappingURL=county-input.js.map