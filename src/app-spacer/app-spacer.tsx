import { LitElement, html, css } from 'lit';

class AppSpacer extends LitElement {
  static properties = {
    size: { type: String },
  };

  size: string;

  constructor() {
    super();
    this.size = 'm'; // Default spacing size
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      background-color: none; /* Default grey for visibility */
    }

    /* Height-based spacing */
    :host([size='xs']) {
      height: var(--space-xs, 4px);
    }
    :host([size='s']) {
      height: var(--space-s, 8px);
    }
    :host([size='m']) {
      height: var(--space-m, 16px);
    }
    :host([size='l']) {
      height: var(--space-l, 24px);
    }
    :host([size='xl']) {
      height: var(--space-xl, 32px);
    }
    :host([size='xxl']) {
      height: var(--space-xxl, 48px);
    }
    :host([size='jumbo']) {
      height: var(--space-jumbo, 64px);
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('app-spacer', AppSpacer);
