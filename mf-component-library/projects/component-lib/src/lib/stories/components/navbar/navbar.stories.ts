import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export default {
  title: 'NavbarComponent',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [MatSliderModule,MatButtonToggleModule,BrowserAnimationsModule],
    }),
  ],
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<NavbarComponent>;