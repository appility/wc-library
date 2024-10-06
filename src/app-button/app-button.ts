import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js'; // Import classMap

class AppButton extends LitElement {
  static styles = css`
    /* Base button styles */
    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: var(--border-radius, 4px);
      font-family: var(--font-family, "Gill Sans");
      font-size: var(--font-size-medium, 16px);
      font-weight: var(--font-weight, 400);
      padding: 10px 20px;
      cursor: pointer;
      transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
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
    }

    .large {
      height: 48px; /* Fixed height for large button */
      padding: 15px 30px;
      font-size: var(--font-size-large, 20px);
    }

    /* Add space between text and suffix */
    span {
      margin: 0 8px; /* Adds space between the prefix and suffix */
    }

    /* Style for slots */
    [slot="prefix"] {
      margin-right: 8px; /* Adds space between the prefix and text */
      font-family: "Arial", sans-serif; /* Force it to use a non-emoji font */
      font-size: 16px;
      color: currentColor; /* Ensures it inherits the text color */
    }

    [slot="suffix"] {
      margin-left: 8px; /* Adds space between the text and suffix */
      font-family: "Arial", sans-serif; /* Force it to use a non-emoji font */
      font-size: 16px;
      color: currentColor; /* Ensures it inherits the text color */
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
  `;

  // Declare reactive properties
  static properties = {
    label: { type: String },
    size: { type: String },
    variant: { type: String },
    outlined: { type: Boolean, reflect: true },  // Reflect true to ensure sync between attribute and property
    disabled: { type: Boolean },
  };
  

  label: string;
  size: string;
  variant: string;
  outlined: boolean;
  disabled: boolean;

  constructor() {
    super();
    this.label = 'Click Me';  // Default label
    this.size = 'medium';     // Default size
    this.variant = 'default'; // Default variant
    this.outlined = false;    // Only false if not passed externally
    this.disabled = false;    // Default disabled state
  }
  

  connectedCallback() {
    super.connectedCallback();
    
    // Log the attribute value to verify it's being passed
    const outlinedAttr = this.getAttribute('outlined');
    console.log('Component connected, outlined attribute:', outlinedAttr);
    
    // If outlined attribute is present, sync it with the property
    if (outlinedAttr !== null) {
      this.outlined = outlinedAttr === 'true';  // Explicitly convert to boolean
    }
    
    console.log('Component connected, outlined property:', this.outlined);
  }
  

  updated(changedProperties: any) {
    console.log('Component updated, outlined value:', this.outlined);
    console.log('Changed properties:', changedProperties);
    
    if (changedProperties.has('outlined')) {
      console.log('Outlined changed:', this.outlined);
    }
  }
  
  
  

  // Render the button with dynamic classes based on size, variant, and outlined state
  render() {
    // Build the class map for the button
    const classes = {
      [this.size]: true,
      [this.variant]: true,
      outlined: this.outlined,
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
