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
  
  // Add the prefix and suffix slot content
  if (args.prefix) {
    const prefixElement = document.createElement('span');
    prefixElement.setAttribute('slot', 'prefix');
    prefixElement.textContent = args.prefix;
    button.appendChild(prefixElement);
  }

  if (args.suffix) {
    const suffixElement = document.createElement('span');
    suffixElement.setAttribute('slot', 'suffix');
    suffixElement.textContent = args.suffix;
    button.appendChild(suffixElement);
  }

  // Attach the click action in JavaScript to avoid implicit actions during rendering
  button.addEventListener('click', action('button-clicked'));

  return button;
};

// Default Story with prefix and suffix control
export const DefaultMediumWithPrefix = Template.bind({});
DefaultMediumWithPrefix.args = {
  label: 'Click Me',
  size: 'medium',
  variant: 'primary',
  outlined: false,
  disabled: false,
  prefix: '🔍',
};

export const DefaultMediumWithSuffix = Template.bind({});
DefaultMediumWithSuffix.args = {
    label: 'Click Me',
    size: 'medium',
    variant: 'primary',
    outlined: false,
    disabled: false,
    suffix: '➡️',
  };
