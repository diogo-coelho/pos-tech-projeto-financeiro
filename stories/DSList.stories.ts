import type { Meta, StoryObj } from '@storybook/react';
import '../styles/app.scss';

import DSList from '../components/design-system/DSList';
import '../components/design-system/DSList/DSList.scss';

const meta: Meta<typeof DSList> = {
  component: DSList,
  tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof DSList>;

export const Default: Story = {
  args: {
    items: [
        { title: "Transferência", value: 50, date: new Date() },
        { title: "Depósito", value: 80, date: new Date() },
        { title: "Transferência", value: 120, date: new Date() }
    ]
  }
}