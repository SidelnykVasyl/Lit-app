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
        this.state = '';
        this.country = '';
    }
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return html `
      ${this.state === 'disabled'
            ? html `
              <label class="country-label">Pays</label>
              <input class="country-input" type="text" disabled .value=${this.country}>`
            : html `
            <select>
                <option>FRANCE</option>
                <option>SWITZERLAND</option>
                <option>EU</option>
            </select> 
        >`}
    `;
    }
};
MyElement.styles = css `
  input:disabled {
    border: none;
    pointer-events: none;
    background: inherit;
    color: #707070;
  }

  .country-input {
    font-size: 14px;
  }

  .country-label {
    font-size: 12px;
    display: block;
    margin: 5px 0;
  }

  
  `;
__decorate([
    property()
], MyElement.prototype, "state", void 0);
__decorate([
    property()
], MyElement.prototype, "country", void 0);
MyElement = __decorate([
    customElement('country-input')
], MyElement);
export { MyElement };
//# sourceMappingURL=county-input.js.map