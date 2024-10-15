import type { Meta, StoryObj } from '@storybook/react';
import '../styles/app.scss';

import Button from '../components/Button';
import '../components/Button/Button.scss';

const meta: Meta<typeof Button> = {
  component: Button
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    disabled: false
  }
}