import { LitElement, html, css } from 'lit';

class AppGrid extends LitElement {
  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
    }

    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: var(--grid-gap, 16px); /* Optional gap between items */
    }
  `;

  render() {
    return html`<div class="grid"><slot></slot></div>`;
  }
}

customElements.define('app-grid', AppGrid);
