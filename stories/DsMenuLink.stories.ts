import type { Meta, StoryObj } from '@storybook/react';
import '../styles/app.scss';

import DSMenuLink from '../components/design-system/DSMenuLink';
import '../components/design-system/DSMenuLink/DSMenuLink.scss';

const meta: Meta<typeof DSMenuLink> = {
  component: DSMenuLink,
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof DSMenuLink>;

export const Default: Story = {
  args: {
    href: '/',
    children: 'Link de Menu'
  }
}