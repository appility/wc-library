import { LitElement, html, css } from 'lit';

class AppTypography extends LitElement {
  static properties = {
    color: { type: String },
    as: { type: String },  // Define `as` to specify the element type
  };
    color: string;
    as: string;

  constructor() {
    super();
    this.color = '#333';   // Default text color
    this.as = 'p';         // Default element type is a paragraph
  }

  static styles = css`
    :host {
      display: block;
    }

    .typography {
      font-family: var(--font-family, 'Georgia', serif);
      line-height: var(--line-height, 1.5);
      color: var(--text-color, #333); /* Use custom or default color */
    }

    /* Font size scaling based on a modular scale */
    .heading-1 {
      font-size: calc(var(--base-font-size, 16px) * 2.441);
    }

    .heading-2 {
      font-size: calc(var(--base-font-size, 16px) * 1.953);
    }

    .heading-3 {
      font-size: calc(var(--base-font-size, 16px) * 1.563);
    }

    .heading-4 {
      font-size: calc(var(--base-font-size, 16px) * 1.25);
    }

    .paragraph {
      font-size: var(--base-font-size, 16px);
    }

    /* Responsive typography scaling */
    @media (max-width: 768px) {
      .heading-1 {
        font-size: calc(var(--base-font-size, 16px) * 1.953);
      }
      .heading-2 {
        font-size: calc(var(--base-font-size, 16px) * 1.563);
      }
    }

    @media (max-width: 480px) {
      .heading-1 {
        font-size: calc(var(--base-font-size, 16px) * 1.563);
      }
      .heading-2 {
        font-size: calc(var(--base-font-size, 16px) * 1.25);
      }
    }
  `;

  // Dynamic rendering based on the `as` prop
  render() {
    const tag = this.as || 'p'; // Default to 'p' if no 'as' prop is provided

    return html`
      <${tag}
        class="typography"
        style="--text-color: ${this.color};"
      >
        <slot></slot>
      </${tag}>
    `;
  }
}

customElements.define('app-typography', AppTypography);
