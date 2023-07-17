import {LitElement, css, CSSResult} from 'lit-element';
export class ResetStylesElement extends LitElement {
  static styles = css`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Raleway', sans-serif;
    }
  ` as CSSResult;
}
