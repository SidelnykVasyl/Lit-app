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
import {LitElement, html, customElement, property, css} from 'lit-element';

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
@customElement('payment-method-element')
export class MyElement extends LitElement {
  static styles = [
    css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
      }
      .abonnement-header {
        display: flex;
        align-items: center;
        margin-bottom: 13px;
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

  selectedItemIndex: number;

  @property({type: Array})
  payments: Payment[] = [];

  @property({type: Number})
  count = 0;

  @property({type: Boolean})
  isButtonEnabled = false;

  constructor() {
    super();

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
    } catch (error) {
      console.error(error);
    }
  }

  handleSelectItem(index: number) {
    this.payments = this.payments.map((item: any, i) => {
      return {
        ...item,
        selected: i === index,
      };
    });

    this.isButtonEnabled = index >= 0;
  }

  handleClick() {
    const event = new CustomEvent('child-data', {
      detail: {data: 2},
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div class="abonnement-header">
        <div>
          <img src="/assets/hand.svg" alt="#" />
        </div>
        <div>
          <h2>
            Abonnement Forfait KIM Individuel
          </h2>
          <p>
            (1 gardien de but)
          </p>
        </div>
      </div>

      <div class="individual-package">
        <div class="individual-package-title">
          Le forfait individuel comprend :
        </div>
        <ul>
          <li>Accès à l’application KIM</li>
          <li>Accès illimité aux tutoriels et aux contenus publics</li>
        </ul>
      </div>
      <div class="payment">
        <p class="payment-title">Choisissez votre mode de paiement :</p>
        <div class="payment-price">
          ${this.payments.map(
            (item, index) => html`
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
            `
          )}
        </div>
        <button
          @click=${() => this.handleClick()}
          class="subscribe-btn"
          ?disabled="${!this.isButtonEnabled}"
        >
          S’abonner
        </button>
      </div>
      <div></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'payment-method-element': MyElement;
  }
}
