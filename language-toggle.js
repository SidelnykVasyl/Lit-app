var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
import i18next from './localization';
let LanguageToggle = class LanguageToggle extends LitElement {
    // toggleLanguage() {
    //   this.selectedLanguage = this.selectedLanguage === 'EN' ? 'FR' : 'EN';
    // }
    constructor() {
        super();
        this.selectedLanguage = 'EN';
        this.currentLocale = '';
        this.currentLocale = 'en';
        const event = new CustomEvent('child-data', {
            detail: { data: this.currentLocale },
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
            detail: { data: this.currentLocale },
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
            detail: { data: this.currentLocale },
        });
        this.dispatchEvent(event);
    }
    render() {
        return html `
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
};
LanguageToggle.styles = css `
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
__decorate([
    property({ type: String })
], LanguageToggle.prototype, "selectedLanguage", void 0);
__decorate([
    property({ type: String })
], LanguageToggle.prototype, "currentLocale", void 0);
LanguageToggle = __decorate([
    customElement('language-toggle')
], LanguageToggle);
export { LanguageToggle };
//# sourceMappingURL=language-toggle.js.map