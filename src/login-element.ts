import {LitElement, html, customElement, property, css} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {ResetStylesElement} from './reset.styles';
import i18next from './localization'
@customElement('login-element')
export class LoginElement extends LitElement {
  @property() currentLocale = '';
  static styles = [
    ResetStylesElement.styles,
    css`
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
        position: relative;
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
        background: transparent
          linear-gradient(180deg, #10b8cc 0%, #6531cd 100%) 0% 0% no-repeat
          padding-box;
        border: none;
        color: #fff;
        width: 150px;
        cursor: pointer;
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
        text-decoration: underline;
        cursor: pointer;
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

      .error {
        position: absolute;
        left: 50%;
        top: 35px;
        transform: translateX(-50%);
        font-size: 12px;
        color: #ff0000;
      }

      .inputError {
        border: 1px solid #ff0000 !important;
      }
    `,
  ];

  @property()
  name = 'World';
  users: Array<any> = [];

  @property({type: Number})
  count = 0;

  @property({type: String})
  email = 'kim-coach2@yopmail.com';

  @property({type: String})
  password = '';

  @property({type: Boolean})
  showError = false;

  onEmailChange(e: any) {
    this.email = e.target.value;
  }

  onPasswordChange(e: any) {
    this.password = e.target.value;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  async login() {
    try {
      const response = await fetch('http://localhost:8055/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        const errorData = await response.json();
        console.error(errorData);
        this.showError = true;
      }
    } catch (error) {
      console.error(error);
    }
  }


  render() {
    const classes = {
      inputError: this.showError,
    };
    const identifier = i18next.t('toSubscribePleaseIdentifyYourself');
    const iAlreadyHaveAkimAccount = i18next.t('iAlreadyHaveAkimAccount');
    const iCreateMyAccount = i18next.t('iCreateMyAccount');
    const yourEmailAddress = i18next.t('yourEmailAddress');
    const yourPassword = i18next.t('yourPassword');
    const createYourAccountInAFewClicks = i18next.t('createYourAccountInAFewClicks');
    const notRegistred = i18next.t('notRegistred');
    const toLogIn = i18next.t('toLogIn');
    const createAnAccount = i18next.t('createAnAccount');
    const incorrect = i18next.t('incorrect');
    const forgotPass = i18next.t('forgotPass');

    return html`
      <p>
        ${identifier}
        ${this.showError
          ? html`<span class="error"
              >!!! ${incorrect} !!!</span
            >`
          : ''}
      </p>

      <div class="wrapper">
        <div>
          <h3>
            ${iAlreadyHaveAkimAccount}
          </h3>

          <div class="sign-in card">
            <label>
              ${yourEmailAddress}
            </label>
            <input
              class=${(classMap(classes), 'email')}
              .value="${this.email}"
              @change=${this.onEmailChange}
            />
            <label>
              ${yourPassword}
            </label>
            <input
              class=${classMap(classes)}
              type="password"
              .value="${this.password}"
              @change=${this.onPasswordChange}
            />
            <a>${forgotPass}</a>

            <button @click=${this.login}>
              ${toLogIn}
            </button>
          </div>
        </div>
        <div>
          <h3>
            ${iCreateMyAccount}
          </h3>

          <div class="sign-up card">
            <p>
              ${notRegistred}
              <span class="bold">${createYourAccountInAFewClicks}</span>
            </p>
            <button>
              ${createAnAccount}
            </button>
            <div>
      </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'login-element': LoginElement;
  }
}
