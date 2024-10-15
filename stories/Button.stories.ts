import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import '../styles/app.scss';

import Button from '../components/Button';
import '../components/Button/Button.scss';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  args: {
    handleOnClick: fn()
  },
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  }
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success'
  }
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger'
  }
}

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button'
  }
}

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button'
  }
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true
  }
}
