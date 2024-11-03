import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import '../styles/app.scss';

import DSIconButton from '../components/design-system/DSIconButton';
import '../components/design-system/DSIconButton/DSIconButton.scss';

const meta: Meta<typeof DSIconButton> = {
  component: DSIconButton,
  tags: ['autodocs'],
  args: {
    handleOnClick: fn()
  },
}

export default meta;
type Story = StoryObj<typeof DSIconButton>;

export const Default: Story = {
  args: {
    source: '/images/menu_icon.png',
    alt: 'Menu de ícone',
    width: 15,
    height: 15,
  }
}