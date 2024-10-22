import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import '../styles/app.scss';

import DSInput from '../components/design-system/DSInput';
import '../components/design-system/DSInput/DSInput.scss';

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

export const TypeNumber: Story = {
  args: {
    type: "number",
    placeholder: "Insira um número"
  }
}

export const CurrentValue: Story = {
  args: {
    type: "text",
    currentValue: "John Doe",
    placeholder: "Insira um nome"
  }
}