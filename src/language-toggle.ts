import { LitElement, html, customElement, property, css } from 'lit-element';
import i18next from './localization'

@customElement('language-toggle')
export class LanguageToggle extends LitElement {
  @property({ type: String })
  selectedLanguage = 'EN';
  @property({ type: String })
  currentLocale = '';


  static styles = css`
    .toggle-container {
      display: flex;
      align-items: center;
      position: absolute;
      left: 17px;
      top: 12px;
    }

    .toggle-label {
      margin-right: 8px;
    }

    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 48px;
      height: 24px;
      border-radius: 12px;
      background-color: #ccc;
      cursor: pointer;
      align-items: center;
      display: flex;
    }

    .toggle-switch-inner {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: white;
      transition: transform 0.2s ease;
    }

    .toggle-switch-inner.en {
      transform: translateX(24px);
    }

    .toggle-switch-label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #707070;
    }

    .toggle-switch-label span:first-child {
      margin-right: 5px
    }
    .toggle-switch-label span:last-child {
      margin-left: 5px
    }
  `;

  // toggleLanguage() {
  //   this.selectedLanguage = this.selectedLanguage === 'EN' ? 'FR' : 'EN';
  // }

  constructor() {
    super();
    this.currentLocale = 'en'; 
    const event = new CustomEvent('child-data', {
      detail: {data: this.currentLocale},
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  connectedCallback() {
    super.connectedCallback();
    console.log(this.currentLocale);
    i18next.changeLanguage(this.currentLocale);
    this.requestUpdate(); 
    console.log(this.currentLocale);
    const event = new CustomEvent('child-data', {
      detail: {data: this.currentLocale},
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  switchLocale() {
    this.currentLocale = this.currentLocale === 'en' ? 'fr' : 'en';
    
    i18next.changeLanguage(this.currentLocale);
    this.requestUpdate(); 
    console.log(this.currentLocale);
    const event = new CustomEvent('child-data', {
      detail: {data: this.currentLocale},
    });
    this.dispatchEvent(event);

  }

  render() {
    return html`
      <div class="toggle-container">
        <label class="toggle-switch" @click="${this.switchLocale}">
          <div class="toggle-switch-inner ${this.currentLocale.toLowerCase()}"></div>
          <div class="toggle-switch-label">
            <span>FR </span>
            <span> EN</span>
          </div>
        </label>
      </div>
    `;
  }
}
declare global {
    interface HTMLElementTagNameMap {
      'language-toggle': LanguageToggle;
    }
  }