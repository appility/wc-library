import { LitElement, html, css } from 'lit';

export class AppCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .card {
      background-color: var(--card-background-color, white); /* Default background */
      border-radius: var(--card-border-radius, 8px);          /* Rounded corners */
      padding: var(--card-padding, 16px);                    /* Default padding */
      box-shadow: var(--card-box-shadow, 0 4px 6px rgba(0, 0, 0, 0.1)); /* Subtle shadow */
      transition: box-shadow 0.3s ease;                      /* Smooth shadow transition */
    }

    /* Hover effect to enhance shadow on hover */
    .card:hover {
      box-shadow: var(--card-box-shadow-hover, 0 6px 10px rgba(0, 0, 0, 0.15));
    }
  `;

  render() {
    return html`
      <div class="card">
        <slot></slot> <!-- Slot for card content -->
      </div>
    `;
  }
}

customElements.define('app-card', AppCard);
