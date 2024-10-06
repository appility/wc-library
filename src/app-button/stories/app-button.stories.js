import { action } from '@storybook/addon-actions';
import './../app-button'; // Import the Web Component

export default {
  title: 'Components/AppButton',
  component: 'app-button',
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'default', 'success', 'danger'],
    },
    outlined: {
      control: 'boolean',  // Ensure boolean control is set
    },
    disabled: {
      control: 'boolean',
    },
  },
};



// Template function for all stories
const Template = (args) => {
  console.log('Storybook args:', args);
  
  // Log whether outlined is passed correctly as an attribute
  const buttonElement = `<app-button 
    label="${args.label}" 
    size="${args.size}" 
    variant="${args.variant}" 
    outlined="${args.outlined ? 'true' : 'false'}"
    ?disabled="${args.disabled}"
    @click="${action('button-clicked')}"></app-button>
    `;
  
  console.log('Rendered Button Element:', buttonElement);
  
  return buttonElement;
};




// Default Button Stories
export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  label: 'Default Small',
  size: 'small',
  outlined: false, 
};

export const DefaultMedium = Template.bind({});
DefaultMedium.args = {
  label: 'Default Medium',
  size: 'medium',
  outlined: false, 
};

export const DefaultLarge = Template.bind({});
DefaultLarge.args = {
  label: 'Default Large',
  size: 'large',
  outlined: false, 
};

// Primary Button Stories
export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  label: 'Primary Small',
  size: 'small',
  variant: 'primary',
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  label: 'Primary Medium',
  size: 'medium',
  variant: 'primary',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  label: 'Primary Large',
  size: 'large',
  variant: 'primary',
};

// Secondary Button Stories
export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  label: 'Secondary Small',
  size: 'small',
  variant: 'secondary',
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  label: 'Secondary Medium',
  size: 'medium',
  variant: 'secondary',
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  label: 'Secondary Large',
  size: 'large',
  variant: 'secondary',
};

// Success Button Stories
export const SuccessSmall = Template.bind({});
SuccessSmall.args = {
  label: 'Success Small',  // Should be "Success Small"
  size: 'small',
  variant: 'success',
};

export const SuccessMedium = Template.bind({});
SuccessMedium.args = {
  label: 'Success Medium',  // Should be "Success Medium"
  size: 'medium',
  variant: 'success',
};

export const SuccessLarge = Template.bind({});
SuccessLarge.args = {
  label: 'Success Large',  // Should be "Success Large"
  size: 'large',
  variant: 'success',
};


// Outlined Primary Button Stories
export const OutlinedPrimarySmall = Template.bind({});
OutlinedPrimarySmall.args = {
  label: 'Outlined Primary Small',
  size: 'small',
  variant: 'primary',
  outlined: true,
};

export const OutlinedPrimaryMedium = Template.bind({});
OutlinedPrimaryMedium.args = {
  label: 'Outlined Primary Medium',
  size: 'medium',
  variant: 'primary',
  outlined: true,
};

export const OutlinedPrimaryLarge = Template.bind({});
OutlinedPrimaryLarge.args = {
  label: 'Outlined Primary Large',
  size: 'large',
  variant: 'primary',
  outlined: true,
};

// Outlined Secondary Button Stories
export const OutlinedSecondarySmall = Template.bind({});
OutlinedSecondarySmall.args = {
  label: 'Outlined Secondary Small',
  size: 'small',
  variant: 'secondary',
  outlined: true,
};

export const OutlinedSecondaryMedium = Template.bind({});
OutlinedSecondaryMedium.args = {
  label: 'Outlined Secondary Medium',
  size: 'medium',
  variant: 'secondary',
  outlined: true,
};

export const OutlinedSecondaryLarge = Template.bind({});
OutlinedSecondaryLarge.args = {
  label: 'Outlined Secondary Large',
  size: 'large',
  variant: 'secondary',
  outlined: true,
};


{/* <app-button 
label="Small" 
size="small" 
variant="${args.variant}" 
outlined="${args.outlined ? 'true' : 'false'}" 
disabled="${args.disabled ? 'true' : 'false'}"
@click="${action('button-clicked')}">
</app-button>
<app-button 
label="Medium" 
size="medium" 
variant="${args.variant}" 
outlined="${args.outlined ? 'true' : 'false'}" 
disabled="${args.disabled ? 'true' : 'false'}"
@click="${action('button-clicked')}">
</app-button>
<app-button 
label="Large" 
size="large" 
variant="${args.variant}" 
outlined="${args.outlined ? 'true' : 'false'}" 
disabled="${args.disabled ? 'true' : 'false'}"
@click="${action('button-clicked')}">
</app-button> */}