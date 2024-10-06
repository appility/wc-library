import { AppCard } from './../app-card';  // Import the base class
import { css, unsafeCSS } from 'lit';  // Ensure you import `css` and `unsafeCSS` from 'lit'

class ProfileCard extends AppCard {
  // Properly extend styles by combining them with the base class styles
  static styles = [
    ...AppCard.styles,  // Spread the base class styles (inheriting them)
    css`
      .profile-picture {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 16px;
      }

      .profile-name {
        font-size: 1.5em;
        font-weight: bold;
      }

      .profile-description {
        color: gray;
      }
    `,
  ];

  static properties = {
    profilePicture: { type: String },
    name: { type: String },
    description: { type: String },
  };

  render() {
    return html`
      <div class="card">
        <img class="profile-picture" src="${this.profilePicture}" alt="Profile Picture" />
        <div class="profile-name">${this.name}</div>
        <div class="profile-description">${this.description}</div>
      </div>
    `;
  }
}

customElements.define('profile-card', ProfileCard);
 s