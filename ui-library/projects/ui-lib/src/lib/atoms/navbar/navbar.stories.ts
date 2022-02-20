import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';
import { AngularMaterialModules } from '../../angular-material/angular-material.module';

export default {
  title: 'Atoms/Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AngularMaterialModules],
    }),
  ],
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<NavbarComponent>;