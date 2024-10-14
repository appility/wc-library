import { action } from '@storybook/addon-actions';
import './../app-button'; // Import the Web Component

export default {
  title: 'Components/WCButton with Prefix and Suffix',
  component: 'app-button',
  argTypes: {
    label: { control: 'text' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'default', 'success', 'danger'],
    },
    outlined: { control: 'boolean' },
    disabled: { control: 'boolean' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
  },
};

// Template function to render the button with prefix and suffix slots
const Template = (args) => {
  const button = document.createElement('app-button');
  
  button.label = args.label;
  button.size = args.size;
  button.variant = args.variant;
  button.outlined = args.outlined;
  button.disabled = args.disabled;
  
  // Add the prefix slot content (SVG or other HTML content)
  if (args.prefix) {
    const prefixElement = document.createElement('span');
    prefixElement.setAttribute('slot', 'prefix');
    prefixElement.innerHTML = args.prefix; // Allows SVG or HTML content
    button.appendChild(prefixElement);
  }

  // Add the suffix slot content (SVG or emoji)
  if (args.suffix) {
    const suffixElement = document.createElement('span');
    suffixElement.setAttribute('slot', 'suffix');
    suffixElement.innerHTML = args.suffix; // Allows SVG or HTML content
    button.appendChild(suffixElement);
  }

  // Attach the click action in JavaScript to avoid implicit actions during rendering
  button.addEventListener('click', action('button-clicked'));

  return button;
};

// Default Story with prefix (SVG) and suffix (Emoji) control
export const DefaultMediumWithPrefix = Template.bind({});
DefaultMediumWithPrefix.args = {
  label: 'Click Me',
  size: 'medium',
  variant: 'primary',
  outlined: false,
  disabled: false,
  prefix: `<svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd"></path>
  </svg>`,
};

export const DefaultMediumWithSuffix = Template.bind({});
DefaultMediumWithSuffix.args = {
  label: 'Click Me',
  size: 'medium',
  variant: 'primary',
  outlined: false,
  disabled: false,
  suffix: `<svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd"></path>
  </svg>`,
};
