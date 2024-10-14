import './../app-typography';

export default {
  title: 'Components/Typography',
  component: 'app-typography',
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p'],
      defaultValue: 'p',
      description: 'Specifies the HTML tag to render the typography as.',
    },
    color: { 
      control: 'color',
      defaultValue: '#333',
      description: 'Sets the text color for the typography.',
    },
    size: {
      control: 'select',
      options: ['x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'],
      defaultValue: 'medium',
      description: 'Defines the font size of the typography independently of the HTML tag.',
    },
    text: {
      control: 'text',
      defaultValue: 'Sample typography text.',
      description: 'The content displayed inside the typography component.',
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'auto', // Automatically captures rendered HTML
      },
    },
  },
};

// Template function to render the component with args
const Template = ({ as, color, size, text }) => {
  return `
    <app-typography as="${as}" color="${color}" size="${size}">
      ${text}
    </app-typography>
  `;
};

// Stories for each size variant

export const XSmall = Template.bind({});
XSmall.args = {
  as: 'p',
  color: '#000',
  size: 'x-small',
  text: 'This is x-small typography.',
};

export const Small = Template.bind({});
Small.args = {
  as: 'p',
  color: '#333',
  size: 'small',
  text: 'This is small typography.',
};

export const Medium = Template.bind({});
Medium.args = {
  as: 'p',
  color: '#555',
  size: 'medium',
  text: 'This is medium typography (default size).',
};

export const Large = Template.bind({});
Large.args = {
  as: 'p',
  color: '#777',
  size: 'large',
  text: 'This is large typography.',
};

export const XLarge = Template.bind({});
XLarge.args = {
  as: 'p',
  color: '#999',
  size: 'x-large',
  text: 'This is x-large typography.',
};

export const XXLarge = Template.bind({});
XXLarge.args = {
  as: 'p',
  color: '#bbb',
  size: 'xx-large',
  text: 'This is xx-large typography.',
};

export const Jumbo = Template.bind({});
Jumbo.args = {
  as: 'h1',
  color: '#bbb',
  size: 'jumbo',
  text: 'This is jumbo typography.',
};
