import { LitElement, html, css } from 'lit';

class AppCard extends LitElement {
  static properties = {
    shadow: { type: Boolean, reflect: true }, // Reflect to sync attribute and property
    padding: { type: String, reflect: true },
  };

  static styles = css`
    :host {
      display: block;
      background-color: var(--card-background-color, #ffffff);
      border-radius: var(--card-border-radius, 8px);
      border: 1px solid var(--card-border-color, #e5e7eb);
      color: var(--card-text-color, #333);
    }

    /* Apply shadow only when 'shadow' attribute is present */
    :host([shadow]) {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    /* Padding variations based on attribute */
    .header,
    .content,
    .footer {
      padding: var(--card-padding, 16px);
    }

    :host([padding="small"]) .header,
    :host([padding="small"]) .content,
    :host([padding="small"]) .footer {
      padding: 8px;
    }

    :host([padding="large"]) .header,
    :host([padding="large"]) .content,
    :host([padding="large"]) .footer {
      padding: 24px;
    }

    .divider {
      border-top: 1px solid var(--card-divider-color, #e5e7eb);
    }
  `;
  shadow: boolean;
  padding: string;

  constructor() {
    super();
    this.shadow = false; // Default to no shadow
    this.padding = 'medium'; // Default padding
  }

  render() {
    return html`
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="divider"></div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="divider"></div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    `;
  }
}

customElements.define('app-card', AppCard);
