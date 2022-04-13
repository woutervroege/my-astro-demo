import { LitElement, html, css } from 'lit';

export const tagName = 'my-element';

class MyElement extends LitElement {

  static get properties() {
    return {
      name: {
        type: String,
      }
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        color: red;
        font-family: sans-serif;
      }
    `
  }

  render() {
    return html` <p>Hello ${this.name}</p> `;
  }
}

window.customElements.define(tagName, MyElement);