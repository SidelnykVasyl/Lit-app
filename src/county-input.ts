import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('country-input')
export class MyElement extends LitElement {
  static styles = css`
  `;
  @property({type: Number})
  count = 0;

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div class="wrapper">
        <p>
          Pas de soucis, indiquez votre email et nous vous enverrons un lien
          vous permettant de ressaisir votre mot de passe.
        </p>
        <div class="address">
        <label>Votre adresse email</label>
        <input type="email" />
        <button>
          Envoyer
        </button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'country-input': MyElement;
  }
}
