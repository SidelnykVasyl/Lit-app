import {LitElement, html, customElement, css} from 'lit-element';


@customElement('logo-element')
export class LoginElement extends LitElement {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Raleway', sans-serif;
    }
    img {
        display: block;
        margin: 0 auto;
    }
    .title {
        text-align: center;
        margin-top: 13px;
        font-size: 31px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
        <img src="/assets/logo.svg" alt="#" />
        <h2 class="title">
            <slot></slot>
        </h2>
    `;
  }

}


declare global {
  interface HTMLElementTagNameMap {
    'logo-element': LoginElement;
  }
}

