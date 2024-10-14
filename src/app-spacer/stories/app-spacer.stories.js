import './../app-spacer';

export default {
  title: 'Components/Spacer',
  component: 'app-spacer',
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl', 'xxl', 'jumbo'],
      defaultValue: 'm',
    },
  },
};

// Template function for all stories
const Template = ({ size }) => {
  return `
    <div style="border-top: 1px dashed grey;">
      <span>Content Above</span>
    </div>
    <app-spacer size="${size}" style="display: block; background-color: #d3d3d3; height: var(--space-${size});"></app-spacer>
    <div style="border-top: 1px dashed grey;">
      <span>Content Below</span>
    </div>
  `;
};

// Stories for each size variant
export const ExtraSmall = Template.bind({});
ExtraSmall.args = { size: 'xs' };

export const Small = Template.bind({});
Small.args = { size: 's' };

export const Medium = Template.bind({});
Medium.args = { size: 'm' };

export const Large = Template.bind({});
Large.args = { size: 'l' };

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { size: 'xl' };

export const DoubleExtraLarge = Template.bind({});
DoubleExtraLarge.args = { size: 'xxl' };

export const Jumbo = Template.bind({});
Jumbo.args = { size: 'jumbo' };
