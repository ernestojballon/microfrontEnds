import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponentComponent } from './button-component.component';

export default {
  title: 'buttonComponent',
  component: ButtonComponentComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta;

const Template: Story<ButtonComponentComponent> = (args: ButtonComponentComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<ButtonComponentComponent>;