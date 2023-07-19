import {LitElement, html, customElement, css, property} from 'lit-element';

@customElement('popup-element')
class PopupElement extends LitElement {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Raleway', sans-serif;
    }
    .popup {
      box-sizing: border-box;
      width: 826px;
      position: fixed;
      top: 77px;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      padding: 38px 59px;
      border-radius: 15px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }
    .popup .close-btn {
      top: 12px;
      right: 13px;
      position: absolute;
    }
    .step {
      display: none;
    }

    .step.active {
      display: block;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  `;

  @property({type: Number})
  currentStep = 1;
  @property({type: String})
  currentLang = 'en';
  static properties = {
    currentStep: {type: Number},
  };

  constructor() {
    super();
    this.currentStep = 3;
  }

  handleCurrentStep(event: CustomEvent) {
    const dataFromChild = event.detail.data;
    // this.currentStep = dataFromChild;
    console.log('Received data from child:', dataFromChild);
  }

  handleCurrentLang(event: CustomEvent) {
    const dataFromChild = event.detail.data;
    this.currentLang = dataFromChild;
    console.log('Received data from child:', dataFromChild);
  }

  render() {
    return html`
      <div class="popup">
        <div class="close-btn">
          <img src="/assets/close.svg" alt="#" />
        </div>
        <language-toggle @child-data=${
            this.handleCurrentLang
          }></language-toggle>
        <div class="step ${this.currentStep === 1 ? 'active' : ''}">
          <payment-method-element .currentLocale=${this.currentLang} @child-data=${
            this.handleCurrentStep
          }></payment-method-element>
        </div>
        <div class="step ${this.currentStep === 2 ? 'active' : ''}">
        <logo-element>
            Connexion
        </logo-element>
        <login-element .currentLocale=${this.currentLang}></login-element>
    </my-element>
        </div>
        <div class="step ${this.currentStep === 3 ? 'active' : ''}">
          <logo-element .currentLocale=${this.currentLang}>
          Création de compte
          </logo-element>
         <sign-up-element>
         </sign-up-element>
        </div>
        <div class="step ${this.currentStep === 4 ? 'active' : ''}">
          <p>Step 4 content...</p>
        </div>
        <div class="buttons">
          <button
            @click="${this.previousStep}"
            ?disabled="${this.currentStep === 1}"
          >
            Previous
          </button>
          <button
            @click="${this.nextStep}"
            ?disabled="${this.currentStep === 4}"
          >
            Next
          </button>
        </div>
      </div>
    `;
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep -= 1;
    }
  }

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep += 1;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'popup-element': PopupElement;
  }
}
