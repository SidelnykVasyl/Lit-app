import {LitElement, html, customElement, css, property} from 'lit-element';

@customElement('popup-element')
class PopupElement extends LitElement {
  @property({type: Number})
  currentStep = 1;
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
  static properties = {
    currentStep: {type: Number},
  };

  constructor() {
    super();
    this.currentStep = 1;
  }


//   connectedCallback() {
//     super.connectedCallback();
//     this.addEventListener('child-data', this.handleChildData);
//   }

//   disconnectedCallback() {
//     super.disconnectedCallback();
//     this.removeEventListener('child-data', this.handleChildData);
//   }

  handleChildData(event: CustomEvent) {
    const dataFromChild = event.detail.data;
    this.currentStep = dataFromChild
    console.log('Received data from child:', dataFromChild);
  }
  

  render() {
    return html`
      <div class="popup">
        <div class="close-btn">
          <img src="/assets/close.svg" alt="#" />
        </div>
        <div class="step ${this.currentStep === 1 ? 'active' : ''}">
          <payment-method-element @child-data=${this.handleChildData}></payment-method-element>
        </div>
        <div class="step ${this.currentStep === 2 ? 'active' : ''}">
        <logo-element>
            Connexion
        </logo-element>
        <login-element></login-element>
    </my-element>
        </div>
        <div class="step ${this.currentStep === 3 ? 'active' : ''}">
          <p>Step 3 content...</p>
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
