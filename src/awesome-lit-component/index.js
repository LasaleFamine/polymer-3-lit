import {html} from 'lit-html';
import PolyLitElement from './../poly-lit-element';

export default class AwesomeLitComponent extends PolyLitElement {
  static get properties() {
    return {
      myName: {
        type: String,
        value: 'Init name',
        observer: 'myNameChanged'
      }
    };
  }

  constructor() {
    super();
    this.myName = 'Luke';
  }

  myNameChanged(myName, oldName) {
    console.log('Name changed!', myName, oldName);
  }

  render() {
    return html`
      <div> ${this.myName} </div>
    `;
  }

}

window.customElements.define('awesome-lit-component', AwesomeLitComponent);
