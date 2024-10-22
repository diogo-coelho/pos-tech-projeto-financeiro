import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import '../styles/app.scss';

import DSButton from '../components/design-system/DSButton';
import '../components/design-system/DSButton/DSButton.scss';

const meta: Meta<typeof DSButton> = {
  component: DSButton,
  tags: ['autodocs'],
  args: {
    handleOnClick: fn()
  },
}

export default meta;
type Story = StoryObj<typeof DSButton>;

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Default',
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
