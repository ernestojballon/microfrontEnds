import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { CustomCompComponent } from './custom-comp.component';

export default {
  title: 'CustomCompComponent',
  component: CustomCompComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta;

const Template: Story<CustomCompComponent> = (args: CustomCompComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<CustomCompComponent>;