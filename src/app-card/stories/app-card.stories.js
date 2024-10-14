import './../app-card';

export default {
  title: 'Components/Card',
  component: 'app-card',
  argTypes: {
    shadow: {
      control: 'boolean',
      defaultValue: true,
      description: 'Toggles the shadow on the card',
    },
    padding: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      description: 'Sets padding size for the card content',
    },
  },
};

// Template for rendering the component with args
const Template = ({ shadow, padding }) => `
  <app-card ${shadow ? 'shadow' : ''} padding="${padding}">
    <div slot="header"><h2 style="margin: 0;">Card Header</h2></div>
    <div slot="content">
      <p>This is the main content of the card. It could include text, images, or any other HTML elements.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
    </div>
    <div slot="footer">
      <button style="padding: 8px 16px; border: none; background-color: #007bff; color: white; border-radius: 4px;">
        Action Button
      </button>
    </div>
  </app-card>
`;




// Default card
export const Default = Template.bind({});
Default.args = {
  shadow: true,
  padding: 'medium',
};

// Card without shadow
export const NoShadow = Template.bind({});
NoShadow.args = {
  shadow: false,
  padding: 'medium',
};

// Small padding
export const SmallPadding = Template.bind({});
SmallPadding.args = {
  shadow: true,
  padding: 'small',
};

// Large padding
export const LargePadding = Template.bind({});
LargePadding.args = {
  shadow: true,
  padding: 'large',
};

// Card with custom content
export const CustomContent = () => `
  <app-card shadow="true" padding="large">
    <div slot="header"><h2 style="margin: 0;">Custom Header</h2></div>
    <div slot="content">
      <img src="https://via.placeholder.com/300x150" alt="Placeholder Image" style="width: 100%; border-radius: 4px;">
      <p style="margin-top: 16px;">This card contains an image and some descriptive text, ideal for showcasing products, profiles, or content with a visual component.</p>
    </div>
    <div slot="footer">
      <button style="padding: 8px 16px; border: none; background-color: #007bff; color: white; border-radius: 4px;">
        Action Button
      </button>
    </div>
  </app-card>
`;
CustomContent.storyName = 'Card with Custom Content';
