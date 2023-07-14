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
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let LoginElement = class LoginElement extends LitElement {
    constructor() {
        super(...arguments);
        this.name = 'World';
        this.users = [];
        this.count = 0;
        this.email = '';
        this.password = '';
    }
    onEmailChange(e) {
        this.email = e.target.value;
        console.log(this.email);
    }
    onPasswordChange(e) {
        this.password = e.target.value;
        console.log(this.password);
    }
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return html `
      <p>
        Pour vous abonner, merci de vous identifier
      </p>
      <p class="error">
        !!! Adresse email incorrecte !!!
      </p>
      <div class="wrapper">
        <div>
          <h3>
            J’ai déjà un compte KIM
          </h3>

          <div class="sign-in card">
            <label>
              Votre adresse email
            </label>
            <input
              .value="${this.email}"
              @change=${this.onEmailChange}
              class="email"
            />
            <label>
              Votre mot de passe
            </label>
            <input .value="${this.email}" @change=${this.onEmailChange} />
            <a>Mot de passe oublié ?</a>

            <button>
              Se connecter
            </button>
          </div>
        </div>
        <div>
          <h3>
            J’ai déjà un compte KIM
          </h3>

          <div class="sign-up card">
            <p>
              Vous n’êtes pas encore enregistré chez nous ?
              <span class="bold">Créez votre compte en quelques clics :</span>
            </p>

            <button>
              Créer un compte
            </button>
          </div>
        </div>
      </div>
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
    p {
      font-size: 24px;
      text-align: center;
      margin-bottom: 38px;
    }

    .card {
      display: flex;
      flex-direction: column;
      border: 1px solid #707070;
      padding: 72px 27px 38px;
      margin-top: 13px;
      height: 316px;
    }

    .card label {
      font-size: 14px;
      margin-bottom: 5px;
    }
    .card input {
      padding: 7px 10px;
      border-radius: 50px;
      border: none;
      box-shadow: inset 0px 3px 6px #00000029;
      border: 1px solid #707070;
    }
    .card button {
      width: fit-content;
      margin: 0 auto;
      padding: 6px;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 50px;
      background: transparent linear-gradient(180deg, #10b8cc 0%, #6531cd 100%)
        0% 0% no-repeat padding-box;
      border: none;
      color: #fff;
      width: 150px;
    }
    .sign-in {
      min-height: 303px;
    }
    .sign-in .email {
      margin-bottom: 20px;
    }
    .sign-in button {
      margin-top: 35px;
    }
    .sign-up p {
      font-size: 18px;
      width: 70%;
      margin: 0 auto 29px;
      line-height: 25px;
    }
    .sign-up button {
      margin-bottom: 20px;
    }
    .card a {
      font-size: 12px;
      color: #662dcd;
      font-style: italic;
      text-align: right;
      margin-top: 5px;
    }

    h3 {
      text-align: center;
      color: #000000;
      font-weight: normal;
      font-size: 16px;
    }

    .wrapper {
      display: flex;
      gap: 43px;
    }
    .wrapper > div {
      flex: 1;
    }

    .bold {
      font-weight: bold;
    }
  `;
__decorate([
    property()
], LoginElement.prototype, "name", void 0);
__decorate([
    property({ type: Number })
], LoginElement.prototype, "count", void 0);
__decorate([
    property({ type: String })
], LoginElement.prototype, "email", void 0);
__decorate([
    property({ type: String })
], LoginElement.prototype, "password", void 0);
LoginElement = __decorate([
    customElement('login-element')
], LoginElement);
export { LoginElement };
//# sourceMappingURL=login-element.js.map