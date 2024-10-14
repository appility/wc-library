
import './../src/app-typography/app-typography';
import './../src/app-spacer/app-spacer';
import './../src/app-card/app-card';

export default {
  title: 'Sample Page',
};

// Template for the sample page layout
const SamplePageTemplate = () => `
  <div style="padding: 24px; background-color: #f3f4f6; font-family: var(--base-font-family, Arial, sans-serif);">
    
    <!-- Header -->
    <app-typography as="h1" size="jumbo" color="#333">
      Sample Page Layout
    </app-typography>
    <app-typography as="p" size="large" color="#666">
      This sample page demonstrates the use of AppTypography, AppCard, and AppSpacer components.
    </app-typography>
    <app-spacer size="l"></app-spacer>

    <!-- Card Section -->
    <div style="display: flex; flex-wrap: wrap; gap: 16px;">
      
      <!-- Card 1 -->
      <app-card padding="large">
        <div slot="header">
          <app-typography as="h2" size="x-large" color="#333">Card Header 1</app-typography>
        </div>
        <div slot="content">
          <app-typography as="p" size="medium" color="#555">
            This is the main content of the first card. You can add any type of content here, including text, images, or buttons.
          </app-typography>
        </div>
        <div slot="footer">
          <button style="padding: 8px 16px; border: none; background-color: #007bff; color: white; border-radius: 4px;">
            Action Button
          </button>
        </div>
      </app-card>

      <!-- Card 2 -->
      <app-card padding="medium">
        <div slot="header">
          <app-typography as="h2" size="large" color="#333">Card Header 2</app-typography>
        </div>
        <div slot="content">
          <app-typography as="p" size="medium" color="#555">
            Content for the second card. This layout showcases responsive padding options.
          </app-typography>
        </div>
        <div slot="footer">
          <button style="padding: 8px 16px; border: none; background-color: #007bff; color: white; border-radius: 4px;">
            Action Button
          </button>
        </div>
      </app-card>

      <!-- Card 3 -->
      <app-card padding="small" shadow="false">
        <div slot="header">
          <app-typography as="h2" size="large" color="#333">Card Header 3</app-typography>
        </div>
        <div slot="content">
          <app-typography as="p" size="medium" color="#555">
            This is a simple card without shadow. You can control shadows and padding individually.
          </app-typography>
        </div>
        <div slot="footer">
          <button style="padding: 8px 16px; border: none; background-color: #007bff; color: white; border-radius: 4px;">
            Action Button
          </button>
        </div>
      </app-card>

    </div>

    <app-spacer size="xl"></app-spacer>

    <!-- Footer Text Section -->
    <app-typography as="p" size="large" color="#777">
      This layout demonstrates how different components can be combined in a page layout. Use this as a guide for structuring content in your application.
    </app-typography>
  </div>
`;

// Export the Sample Page Story
export const SamplePage = SamplePageTemplate.bind({});
SamplePage.storyName = 'Sample Page Layout';
