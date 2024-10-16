import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import '../styles/app.scss';

import DSInput from '../components/DSInput';
import '../components/DSInput/DSInput.scss';

const meta: Meta<typeof DSInput> = {
  component: DSInput,
  tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof DSInput>;

export const Default: Story = {
  args: {
    type: "text"
  }
}