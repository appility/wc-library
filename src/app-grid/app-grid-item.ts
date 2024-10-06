import { LitElement, html, css } from 'lit';

class AppGridItem extends LitElement {
  static properties = {
    span: { type: Number },  // Declaring `span` as a reactive property
  };

  // Explicit TypeScript declaration for `span`
  span: number;

  constructor() {
    super();
    this.span = 12; // Default to full-width item if no `span` is provided
  }

  static styles = css`
    :host {
      box-sizing: border-box;
      padding: 16px;
      flex-basis: calc(100% / 12 * var(--span, 12)); /* Make the item span columns */
      flex-grow: 0;
      flex-shrink: 0;
    }

    @media (max-width: 768px) {
      :host {
        flex-basis: calc(100% / 6 * var(--span, 6)); /* Responsive for tablets */
      }
    }

    @media (max-width: 480px) {
      :host {
        flex-basis: calc(100% / 2 * var(--span, 2)); /* Responsive for mobile */
      }
    }
  `;

  render() {
    return html`<div><slot></slot></div>`;
  }
}

customElements.define('app-grid-item', AppGridItem);
