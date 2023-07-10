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

import {LitElement, html, customElement, property, css} from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
      margin: 0 auto;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';
  users: Array<any> = [];

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  async getDataFromAPI() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
      this.users = data;
      // Handle the API response
    } catch (error) {
      console.error(error);
      // Handle error
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.getDataFromAPI();
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>

      <div>
        ${this.users.map(user => html`
          <p>${user.name}</p>
          <p>${user.email}</p>
          <hr>
        `)}
      </div>
    `;
  }

  private _onClick() {
    this.count++;
  }

  foo(): string {
    return 'foo';
  }

  
}


declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}

