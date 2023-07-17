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
    .wrapper {
      border: 1px solid #707070;
      padding: 32px 26px 67px;
      margin: 15px -20px 0;
    }
    .wrapper p {
        text-align: center;
      width: 80%;
      margin: 15px auto 80px;
      font-size: 18px;
      
    }
    .address {
        display: flex;
        flex-direction: column;
        align-items: center
    }
    .address label {
        font-size: 12px;
    }
    .address input {
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: inset 0px 3px 6px #00000029;
        border: 1px solid #707070;
        border-radius: 50px;
        padding: 8px 85px;
        margin:10px 0 94px 0;
    }
    .address button {
        background: transparent linear-gradient(180deg, #10B8CC 0%, #6531CD 100%) 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 50px;
        border: none;
        color: #FFFFFF;
        padding: 10px 20px;
    }
  `;
__decorate([
    property({ type: Number })
], MyElement.prototype, "count", void 0);
MyElement = __decorate([
    customElement('forgot-pass-element')
], MyElement);
export { MyElement };
//# sourceMappingURL=forgot-pass.js.map