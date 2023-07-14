/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html, customElement, property, css } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('open-btn-element')
export class MyElement extends LitElement {
  @property({type: Boolean})
  enabled = false;
  classes = {someclass: true, anotherclass: true};
  static styles = css`
    button {
      border: none;
      padding: 10px 15px;
      border-radius: 10px;
      display: block;
      margin: 30px auto;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.5;
    }
  `;

  @property({type: Boolean})
  isOpen = false;

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
        this._openPopup();
    }, 500);
  }

  render() {
    const styles = { display: this.isOpen ? 'none' : 'block'};
    return html`
      <button style=${styleMap(styles)} @click=${this._openPopup} part="button">
        Open Pop-up
      </button>
    `;
  }

  private _openPopup() {
    const popupComponent = document.querySelector('popup-element');
    if (popupComponent) {
      popupComponent.style.display = 'block';
    }
    this.isOpen = !this.isOpen;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'open-btn-element': MyElement;
  }
}
