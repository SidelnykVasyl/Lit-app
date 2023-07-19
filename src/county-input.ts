import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('country-input')
export class MyElement extends LitElement {
  static styles = css`
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
  @property() state = '';
  @property() country = '';


  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      ${this.state === 'disabled'
          ? html`
              <label class="country-label">Pays</label>
              <input class="country-input" type="text" disabled .value=${this.country}>`
          : html`
            <select>
                <option>FRANCE</option>
                <option>SWITZERLAND</option>
                <option>EU</option>
            </select> 
        >`}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'country-input': MyElement;
  }
}
