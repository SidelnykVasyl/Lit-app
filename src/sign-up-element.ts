import {LitElement, html, customElement, property, css} from 'lit-element';
import {ResetStylesElement} from './reset.styles';
import i18next from './localization';

@customElement('sign-up-element')
export class MyElement extends LitElement {
  static styles = [
    ResetStylesElement.styles,
    css`
      .sign-up {
        border: 1px solid #707070;
        padding: 32px 26px 29px;
        margin: 27px -20px 0;
        position: relative;
      }
      .wrapper {
        display: flex;
        gap: 40px;
        margin-bottom: 30px;
      }

      .wrapper .left {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .wrapper .right label:not(:first-child) {
        margin-top: 8px;
      }
      .wrapper .right {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .indicator {
        width: 34px;
        height: 10px;
        border: 1px solid #707070;
        display: inline-block;
        margin: 5px 7px 0 0;
      }

      .bg-red {
        background-color: red;
        border: none;
      }

      input {
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: inset 0px 3px 6px #00000029;
        border: 1px solid #707070;
        border-radius: 50px;
        padding: 9px 10px;
        font-size: 12px;
      }

      img {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      .wrapper label {
        margin-bottom: 5px;
      }

      label {
        font-size: 12px;
      }

      button {
        width: fit-content;
        margin: 25px auto 0;
        padding: 6px;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 50px;
        background: transparent
          linear-gradient(180deg, #10b8cc 0%, #6531cd 100%) 0% 0% no-repeat
          padding-box;
        border: none;
        color: #fff;
        width: 150px;
        cursor: pointer;
        font-size: 16px;
        display: block;
      }

      button:disabled {
        opacity: 0.5;
        pointer-events: none;
      }

      .email {
        margin-bottom: 30px;
      }

      .password {
        margin-bottom: 5px;
        width: 80%;
        position: relative;
      }
      .password-warning {
        font-size: 10px;
        width: 82%;
        margin-bottom: 15px;
      }

      .relative {
        position: relative;
      }

      .error {
        border: 1px solid #ff0000;
      }

      .error-message {
        color: #ff0000;
        position: absolute;
        top: -25px;
        font-size: 12px;
        left: 50%;
        transform: translateX(-50%);
      }

      .checkbox {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
      }
      .checkbox input {
        display: flex;
        align-items: center;
        margin-right: 10px;
      }
    `,
  ];
  @property({type: Number})
  count = 0;

  @property({type: String})
  password = '';

  @property({type: Number})
  strength = 0;

  @property({type: String})
  email = '';

  @property({type: Boolean})
  emailFocused = false;

  @property({type: Boolean})
  hasError = false;

  @property({type: String})
  confirmPassword = '';

  @property({type: Boolean})
  emailError = false;

  @property({type: Boolean})
  passwordError = false;

  @property({type: Boolean})
  confirmPasswordError = false;

  @property({type: Boolean})
  isFormValid = false;

  @property({type: Boolean})
  acceptExclusiveOffers = false;

  @property({type: Boolean})
  acceptCGV = false;

  @property({type: Boolean})
  acceptPrivacyPolicy = false;

  @property({type: String})
  pay = 'FRANCE';

  handleConfirmPasswordChange(event: any) {
    this.confirmPassword = event.target.value;
    this.validateConfirmPassword();
    this.updateFormValidity();
  }

  validateConfirmPassword() {
    this.confirmPasswordError = this.password === this.confirmPassword;
    console.log(this.confirmPasswordError, ' confirmPasswordError');

    this.updateFormValidity();
  }

  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailError = !emailRegex.test(this.email);
  }

  handleEmailChange(event: any) {
    this.email = event.target.value;
    this.validateEmail();
    this.updateFormValidity();
  }

  handleEmailFocus() {
    this.emailFocused = true;
    console.log(this.emailFocused);
  }

  handleEmailBlur() {
    this.emailFocused = false;
    this.validateEmail();
  }

  showPassword(): void {
    const passwords = this.renderRoot.querySelectorAll('#password');

    if (passwords) {
      passwords.forEach((password) => {
        const type =
          password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
      });
    }
  }

  updateFormValidity() {
    const isFieldsFilled =
      !!this.email && !!this.password && !!this.confirmPassword;
    const errorExist =
      !this.emailError && !this.passwordError && !this.confirmPasswordError;
    this.isFormValid = isFieldsFilled && !errorExist;
  }

  handlePasswordChange(event: any) {
    this.password = event.target.value;
    this.strength = this.calculatePasswordStrength(this.password);
    this.validatePassword();
    this.updateFormValidity();
  }

  handleExclusiveOffersChange(event: any) {
    this.acceptExclusiveOffers = event.target.checked;
  }
  handleCGVChange(event: any) {
    this.acceptCGV = event.target.checked;
  }
  handlePrivacyPolicyChange(event: any) {
    this.acceptPrivacyPolicy = event.target.checked;
  }

  validatePassword(): void {
    this.passwordError = this.password.length < 4;
  }

  async getDataFromAPI() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      console.log(data);
      // Handle the API response
    } catch (error) {
      console.error(error);
      // Handle error
    }
  }

  calculatePasswordStrength(password: string): number {
    let strength = 0;

    if (/[a-z]/.test(password)) {
      strength++;
    }

    if (/[A-Z]/.test(password)) {
      strength++;
    }

    if (/[0-9]/.test(password)) {
      strength++;
    }

    if (/[^a-zA-Z0-9]/.test(password)) {
      strength++;
    }

    if (
      /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/.test(
        password
      )
    ) {
      strength++;
    }

    if (
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
        password
      )
    ) {
      strength++;
    }

    if (password.length === 0) {
      strength = 0;
    }

    return strength;
  }

  submitForm() {
    const form = {
        email: this.email,
        password: this.password,
        exclusiveContent: this.acceptExclusiveOffers,
        cvg: this.acceptCGV,
        privacyPolicy: this.acceptPrivacyPolicy,
    }
    console.log(form)
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    const incorrect = i18next.t('incorrect');

    return html`
      <div class="sign-up">
        ${(this.emailError && !this.emailFocused) ||
        (this.passwordError && !this.emailFocused)
          ? html`<span class="error-message">!!! ${incorrect} !!!</span>`
          : ''}
        <div class="wrapper">
          <div class="left">
            <label>Votre adresse email</label>
            <input
              class=${this.emailError ? 'error email' : 'email'}
              @input=${this.handleEmailChange}
              @focus=${this.handleEmailFocus}
              @blur=${this.handleEmailBlur}
              .value=${this.email}
              type="email"
              required
            />
            <label>Votre de passe</label>
            <div class="relative">
              <input
                @input=${this.handlePasswordChange}
                id="password"
                class="password"
                type="password"
                .value=${this.password}
                required
              />
              <img @click=${() => this.showPassword()} src="/assets/eye.svg" />
            </div>
            <label>Confirmation du mot de passe</label>
            <div class="relative">
              <input
                .value=${this.confirmPassword}
                @input=${this.handleConfirmPasswordChange}
                type="password"
                class="password"
                id="password"
                required
              />
            </div>
            <span class="password-warning"
              >* Au moins 8 caractères, une majuscule et une minuscule, un
              chiffre ou un caractère spécial</span
            >
            <div>
              Sécurité de votre mot de passe
            </div>
            <div>
              <div
                class="indicator ${this.strength >= 1 ? 'bg-red' : ''}"
              ></div>
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
          </div>
          <div class="right">
            <label>Votre Prénom</label>
            <input type="email" />
            <label>Votre Nom</label>
            <input type="email" />
            <label>Votre Ville</label>
            <input type="email" />
            <label>Code postal</label>
            <input type="email" />
            <label>Pays</label>
            <input type="text" disabled .value="${this.pay}">
          </div>
        </div>
        <div>
          <div class="checkbox">
            <input  .checked=${this.acceptExclusiveOffers}
              @change=${this.handleExclusiveOffersChange} id="first" type="checkbox" />
            <label for="first"
              >Oui, je souhaite recevoir des offres exclusives de la part de
              Kim.com</label
            >
          </div>
          <div class="checkbox">
            <input
              .checked=${this.acceptCGV}
              @change=${this.handleCGVChange}
              id="second"
              type="checkbox"
            />
            <label for="second"
              >En créant le compte client, vous acceptez nos CGV ainsi que
              l’exploitation de vos données ….</label
            >
          </div>
          <div class="checkbox">
            <input  .checked=${this.acceptPrivacyPolicy}
              @change=${this.handlePrivacyPolicyChange} id="third" type="checkbox" />
            <label for="third"
              >En créant le compte client, vous acceptez notre politique de
              confidentialité</label
            >
          </div>
        </div>
        <h2>${!this.isFormValid}</h2>
        <button @click=${() => this.submitForm()} ?disabled=${!this.isFormValid}>Enregister</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sign-up-element': MyElement;
  }
}
