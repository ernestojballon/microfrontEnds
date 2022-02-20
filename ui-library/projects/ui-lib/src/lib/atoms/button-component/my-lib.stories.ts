import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponentComponent } from './button-component.component';
import { AngularMaterialModules } from '../../angular-material/angular-material.module';

export default {
  title: 'Atoms/ButtonComponent',
  component: ButtonComponentComponent,
  decorators: [
    moduleMetadata({
      imports: [ AngularMaterialModules ],
    }),
  ],
} as Meta;

const Template: Story<ButtonComponentComponent> = (args: ButtonComponentComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<ButtonComponentComponent>;