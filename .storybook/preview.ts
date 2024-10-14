import type { Preview } from "@storybook/web-components";
import '../src/tokens/tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;


// .storybook/preview.js
// import { addDecorator } from '@storybook/react';
// import { withGlobals } from './withGlobals';

// // Add global styles
// export const decorators = [
//   (Story) => (
//     <div style={{ fontFamily: '"Roboto", sans-serif' }}>
//       <Story />
//     </div>
//   ),
// ];

