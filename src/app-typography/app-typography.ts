import { LitElement, html, css } from 'lit';

class AppTypography extends LitElement {
  color: string;
  as: string;
  size: string;

  static properties = {
    color: { type: String },
    as: { type: String },
    size: { type: String },
  };

  constructor() {
    super();
    this.color = '#333'; // Default color
    this.as = 'p';       // Default tag
    this.size = 'medium'; // Default size
  }

  static styles = css`
    :host {
      display: block;
    }

    /* Reset user-agent styles for all potential typography tags */
    h1, h2, h3, h4, h5, h6, p {
      all: unset;
      display: inline;
      margin: 0;
    }

    .typography {
      font-family: var(--font-family, 'Georgia', serif);
      line-height: var(--line-height, 1.5);
      color: var(--text-color, #333);
    }

    /* Base font sizes for mobile-first design */
    .x-small {
      font-size: var(--font-size-xs-sm, 0.65em);
    }
    .small {
      font-size: var(--font-size-s-sm, 0.75em);
    }
    .medium {
      font-size: var(--font-size-m-sm, 0.85em);
    }
    .large {
      font-size: var(--font-size-l-sm, 1em);
    }
    .x-large {
      font-size: var(--font-size-xl-sm, 1.25em);
    }
    .xx-large {
      font-size: var(--font-size-xxl-sm, 1.5em);
    }
    .jumbo {
      font-size: var(--font-size-jumbo-sm, 2em);
    }

    /* Tablet breakpoint */
    @media (min-width: var(--breakpoint-md)) {
      .x-small {
        font-size: var(--font-size-xs-md, 0.7em);
      }
      .small {
        font-size: var(--font-size-s-md, 0.8em);
      }
      .medium {
        font-size: var(--font-size-m-md, 0.9em);
      }
      .large {
        font-size: var(--font-size-l-md, 1.125em);
      }
      .x-large {
        font-size: var(--font-size-xl-md, 1.375em);
      }
      .xx-large {
        font-size: var(--font-size-xxl-md, 1.75em);
      }
      .jumbo {
        font-size: var(--font-size-jumbo-md, 2.5em);
      }
    }

    /* Desktop breakpoint */
    @media (min-width: var(--breakpoint-lg)) {
      .x-small {
        font-size: var(--font-size-xs, 0.75em);
      }
      .small {
        font-size: var(--font-size-s, 0.875em);
      }
      .medium {
        font-size: var(--font-size-m, 1em);
      }
      .large {
        font-size: var(--font-size-l, 1.25em);
      }
      .x-large {
        font-size: var(--font-size-xl, 1.5em);
        font-weight: 700;
      }
      .xx-large {
        font-size: var(--font-size-xxl, 2em);
        font-weight: 800;
      }
      .jumbo {
        font-size: var(--font-size-jumbo, 3em);
        font-weight: 900;
      }
    }
  `;

  render() {
    return this.renderTypography();
  }

  renderTypography() {
    const typographyClass = `${this.size} typography`;

    // Render based on the `as` property
    switch (this.as) {
      case 'h1':
        return html`<h1 class="${typographyClass}" style="color: ${this.color};"><slot></slot></h1>`;
      case 'h2':
        return html`<h2 class="${typographyClass}" style="color: ${this.color};"><slot></slot></h2>`;
      case 'h3':
        return html`<h3 class="${typographyClass}" style="color: ${this.color};"><slot></slot></h3>`;
      case 'h4':
        return html`<h4 class="${typographyClass}" style="color: ${this.color};"><slot></slot></h4>`;
      case 'h5':
        return html`<h5 class="${typographyClass}" style="color: ${this.color};"><slot></slot></h5>`;
      case 'h6':
        return html`<h6 class="${typographyClass}" style="color: ${this.color};"><slot></slot></h6>`;
      default:
        return html`<p class="${typographyClass}" style="color: ${this.color};"><slot></slot></p>`;
    }
  }
}

customElements.define('app-typography', AppTypography);
