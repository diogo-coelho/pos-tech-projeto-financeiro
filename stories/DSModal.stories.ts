import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import '../styles/app.scss';

import DSModal from '../components/design-system/DSModal';
import '../components/design-system/DSModal/DSModal.scss';

const meta: Meta<typeof DSModal> = {
  component: DSModal,
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof DSModal>;

export const Default: Story = {
  args: {
    children: 'Isso é um modal',
    active: 'on',
    setActive: () => fn
  }
}