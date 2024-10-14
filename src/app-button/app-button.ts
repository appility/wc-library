import { LitElement, html, css, PropertyValues } from 'lit';
import { classMap } from 'lit/directives/class-map.js'; // Import classMap

class AppButton extends LitElement {
  static styles = css`
    /* Base button styles */
    button {
      display: inline-flex;
    align-items: center; /* Vertically align all children */
    justify-content: center;
      border: none;
      border-radius: var(--border-radius, 4px);
      font-family: var(--font-family, "Gill Sans");
      font-size: var(--font-size-medium, 16px);
      font-weight: var(--font-weight, 400);
      padding: 10px 20px;
      cursor: pointer;
      transition: outline 0.1s ease, background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    button:not(.outlined):hover {
      outline: 2px solid white;
      outline-offset: -4px;
    }

    /* Size variants */
    .small {
      height: 32px; /* Fixed height for small button */
      padding: 5px 10px;
      font-size: var(--font-size-small, 12px);
    }

    .medium {
      height: 40px; /* Fixed height for medium button */
      padding: 10px 20px;
      font-size: var(--font-size-medium, 16px);
      padding-top: .625rem;
      padding-bottom: .625rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .large {
      height: 48px; /* Fixed height for large button */
      padding: 15px 30px;
      font-size: var(--font-size-large, 20px);
    }

    /* Style for slots */
    ::slotted([slot="prefix"]) {
      margin-right: 8px; /* Adds space between the prefix and text */
    }

    ::slotted([slot="suffix"]) {
      margin-left: 8px; /* Adds space between the text and suffix */
    }

    /* Style for slotted prefix and suffix elements */
    ::slotted([slot="prefix"]),
    ::slotted([slot="suffix"]) {
      display: inline-flex;
      align-items: center; /* Center content within slot */
      font-size: 16px;
      color: currentColor; /* Ensures it inherits the text color */
    }


  /* Text span inside the button */
  span {
    display: inline-flex;
    align-items: center; /* Align text and SVG within button */
    vertical-align: middle;
  }

    /* Button Variants using component-specific tokens */
    .default {
      background-color: var(--default-button-color, #e0e0e0);
      color: var(--default-button-text-color, black);
    }

    .primary {
      background-color: var(--primary-button-color, #1976d2);
      color: var(--primary-button-text-color, white);
    }
    @media (prefers-color-scheme: dark) {
      button {
        background-color: var(--primary-button-color-dark, #2196f3); /* Lighter color for dark mode */
        color: var(--primary-button-text-color-dark, #ffffff); /* White text on dark background */
      }
    }

    .secondary {
      background-color: var(--secondary-button-color, #26A69A);
      color: var(--secondary-button-text-color, white);
    }

    .neutral {
      background-color: var(--neutral-button-color, #9e9e9e);
      color: var (--neutral-button-text-color, white);
    }

    .success {
      background-color: var(--success-button-color, #4caf50);
      color: var(--success-button-text-color, white);
    }

    .warning {
      background-color: var(--warning-button-color, #ff9800);
      color: var(--warning-button-text-color, white);
    }

    .danger {
      background-color: var(--danger-button-color, #f44336);
      color: var(--danger-button-text-color, white);
    }

    /* Outlined variant */
    .outlined {
      background-color: transparent !important; /* Ensure transparent background for outlined buttons */
      border: 2px solid currentColor; /* Use the current color for the border */
      color: inherit; /* Inherit color from the variant */
    }

    /* Primary Outlined */
    .primary.outlined {
      color: var(--primary-button-color, #1976d2);
    }

    /* Secondary Outlined */
    .secondary.outlined {
      color: var(--secondary-button-color, #26A69A);
    }

    /* Neutral Outlined */
    .neutral.outlined {
      color: var(--neutral-button-color, #9e9e9e);
    }

    /* Success Outlined */
    .success.outlined {
      color: var(--success-button-color, #4caf50);
    }

    /* Warning Outlined */
    .warning.outlined {
      color: var(--warning-button-color, #ff9800);
    }

    /* Danger Outlined */
    .danger.outlined {
      color: var(--danger-button-color, #f44336);
    }

    /* Disabled state */
    button:disabled {
      background-color: var(--disabled-button-bg, #cccccc);
      color: var(--disabled-button-text-color, #666666);
      cursor: not-allowed;
    }
    /* width */
    .stretch {
      width: 100%;
    }
  `;

  // Declare reactive properties
  static properties = {
    label: { type: String },
    size: { type: String },
    variant: { type: String },
    outlined: { type: Boolean, reflect: true },  // Reflect true to ensure sync between attribute and property
    disabled: { type: Boolean },
    stretch: { type: Boolean, reflect: true }, 
  };
  

  label: string;
  size: string;
  variant: string;
  outlined: boolean;
  disabled: boolean;
  stretch: boolean;

  constructor() {
    super();
    this.label = 'Click Me';  // Default label
    this.size = 'medium';     // Default size
    this.variant = 'default'; // Default variant
    this.outlined = false;    // Only false if not passed externally
    this.disabled = false;    // Default disabled state
    this.stretch = false
  }
  

  connectedCallback() {
    super.connectedCallback();
    const outlinedAttr = this.getAttribute('outlined');
    // If outlined attribute is present, sync it with the property
    if (outlinedAttr !== null) {
      this.outlined = outlinedAttr === 'true';  // Explicitly convert to boolean
    }
    const stretchAttr = this.getAttribute('stretch');
    if (stretchAttr !== null) {
      this.stretch = stretchAttr === 'true';
    }

    console.log('Component connected, outlined property:', this.outlined);
  }
  
  updated(changedProperties: PropertyValues) {
    // Ensure the default variant is set if the property is missing or undefined
    if (this.variant === undefined || this.variant === 'undefined' || this.variant === '') {
      this.variant = 'default';
    }
  }
  
  // Render the button with dynamic classes based on size, variant, and outlined state
  render() {
    const variantClass = this.variant || 'default';
    debugger
    // Build the class map, including the correct variant and outlined only if true
    const classes = {
      [this.size]: true,
      [variantClass]: true,
      outlined: this.outlined,
      stretch: this.stretch,
    };

    console.log('Outlined value:', this.outlined);  // Should be true or false
    console.log('Classes:', classes); 

    return html`
      <button
        class="${classMap(classes)}"
        ?disabled="${this.disabled}"
      >
        <slot name="prefix"></slot>
        <span>${this.label}</span>
        <slot name="suffix"></slot>
      </button>
    `;
  }
}

customElements.define('app-button', AppButton);



{/* <app-button label="Download" variant="primary" size="large">
  <!-- SVG in the prefix slot -->
  <svg slot="prefix" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.646 2.146a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1-.708.708L8.5 3.707V13.5a.5.5 0 0 1-1 0V3.707L3.354 7.854a.5.5 0 1 1-.708-.708l5-5z"/>
  </svg>

  <!-- SVG in the suffix slot -->
  <svg slot="suffix" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.646 10.646a.5.5 0 0 1 .708 0l3 3l3-3a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
  </svg>
</app-button> */}

