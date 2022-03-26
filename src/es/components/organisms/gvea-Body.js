import { Shadow } from "../web-components-cms-template/src/es/components/prototypes/Shadow";






export default class Body extends BaseBody {

renderCSS () {

    this.css = `
        :host {
            color: red;
        }
    `;

}

}