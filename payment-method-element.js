var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { LitElement, html, customElement, property, css } from 'lit-element';
import i18next from './localization';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyElement = class MyElement extends LitElement {
    constructor() {
        super();
        this.currentLocale = '';
        this.payments = [];
        this.count = 0;
        this.isButtonEnabled = false;
        this.selectedItemIndex = -1;
    }
    connectedCallback() {
        super.connectedCallback();
        this.getDataFromAPI();
        this.handleClick();
    }
    async getDataFromAPI() {
        try {
            const response = await fetch('http://localhost:3000/payments');
            const data = await response.json();
            this.payments = data;
        }
        catch (error) {
            console.error(error);
        }
    }
    handleSelectItem(index) {
        this.payments = this.payments.map((item, i) => {
            return Object.assign(Object.assign({}, item), { selected: i === index });
        });
        this.isButtonEnabled = index >= 0;
    }
    handleClick() {
        const event = new CustomEvent('child-data', {
            detail: { data: 2 },
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    render() {
        const individualKimPackageSubscription = i18next.t('individualKimPackageSubscription');
        const goalkeeper = i18next.t('goalkeeper');
        const accessToTheKimApplication = i18next.t('accessToTheKimApplication');
        const unlimitedAccessToTutorialsAndPublicContent = i18next.t('unlimitedAccessToTutorialsAndPublicContent');
        const theIndividualPackageIncludes = i18next.t('theIndividualPackageIncludes:');
        const choisissezVotreModeDepaiement = i18next.t('choisissezVotreModeDepaiement');
        const subscribe = i18next.t('subscribe');
        return html `
      <h2>${this.currentLocale}</h2>
      <div class="abonnement-header">
        <div>
          <img src="/assets/hand.svg" alt="#" />
        </div>
        <div>
          <h2>
            ${individualKimPackageSubscription}
          </h2>
          <p>
            ${goalkeeper}
          </p>
        </div>
      </div>

      <div class="individual-package">
        <div class="individual-package-title">
          ${theIndividualPackageIncludes}
        </div>
        <ul>
          <li>${accessToTheKimApplication}</li>
          <li>${unlimitedAccessToTutorialsAndPublicContent}</li>
        </ul>
      </div>
      <div class="payment">
        <p class="payment-title">${choisissezVotreModeDepaiement}</p>
        <div class="payment-price">
          ${this.payments.map((item, index) => html `
              <label @click=${() => this.handleSelectItem(index)} class="card">
                <div class="card-top">
                  <p>${item.title}</p>
                  <h2>${item.price}<span>/mois</span></h2>
                  <h3>${item.discount}</h3>
                </div>
                <div>
                  <input
                    .checked="${item.selected}"
                    class="checkbox-round"
                    type="radio"
                  />
                  <span class="choose">
                    ${item.choose}
                  </span>
                </div>
              </label>
            `)}
        </div>
        <button
          @click=${() => this.handleClick()}
          class="subscribe-btn"
          ?disabled="${!this.isButtonEnabled}"
        >
          ${subscribe}
        </button>
      </div>
      <div></div>
    `;
    }
};
MyElement.styles = [
    css `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
      }
      .abonnement-header {
        display: flex;
        align-items: center;
        margin: 20px 0px 13px -23px;
      }

      .abonnement-header img {
        margin-right: 10px;
      }

      .abonnement-header h2 {
        font-size: 31px;
      }
      .abonnement-header p {
        font-size: 24px;
      }

      .individual-package {
        background-color: #4bf5fb;
        border-radius: 10px;
        display: flex;
        padding: 11px 0 11px 30px;
        font-size: 12px;
        margin: 0px -12px;
      }

      .individual-package-title {
        margin-right: 55px;
      }

      .payment {
        margin-top: 75px;
      }

      .payment-title {
        text-align: center;
        font-size: 18px;
        margin-bottom: 13px;
      }
      .card {
        border: 1px solid #707070;
        padding: 16px;
        align-items: center;
        flex: 1;
        text-align: center;
        cursor: pointer
      }
      .card-top {
        margin-bottom: 30px;
        min-height: 96px;
      }
      .card-top p {
        font-size: 18px;
        margin-bottom: 5px;
      }
      .card-top h2 {
        font-size: 38px;
        margin-bottom: 5px;
      }
    
      .card-top span:last-child {
        position: relative;
        font-size: 20px;
      }
      .payment-price {
        display: flex;
        gap: 20px;
        margin-bottom: 13px;
      }
      .payment-price input {
        margin-right: 5px;
        border: solid 1px #ccc;
        border-radius: 10px;
      }

      .payment button {
        background: transparent
          linear-gradient(180deg, #10b8cc 0%, #6531cd 100%) 0% 0% no-repeat
          padding-box;
        border: none;
        border-radius: 50px;
        box-shadow: 0px 3px 6px #00000029;
        padding: 12px 27px;
        color: #fff;
        margin: 68px auto 0;
        display: block;
        font-size: 21px;
        cursor: pointer
      }
      .payment .choose {
        font-size: 18px;
      }
      .checkbox-round {
        width: 1.3em;
        height: 1.3em;
        background-color: white;
        border-radius: 50%;
        vertical-align: middle;
        border: 1px solid #ddd;
        appearance: none;
        -webkit-appearance: none;
        outline: none;
        cursor: pointer;
      }

      .checkbox-round:checked {
        background-color: gray;
      }

      .subscribe-btn:disabled {
        opacity: 0.5;
      }
    `,
];
__decorate([
    property()
], MyElement.prototype, "currentLocale", void 0);
__decorate([
    property({ type: Array })
], MyElement.prototype, "payments", void 0);
__decorate([
    property({ type: Number })
], MyElement.prototype, "count", void 0);
__decorate([
    property({ type: Boolean })
], MyElement.prototype, "isButtonEnabled", void 0);
MyElement = __decorate([
    customElement('payment-method-element')
], MyElement);
export { MyElement };
//# sourceMappingURL=payment-method-element.js.map